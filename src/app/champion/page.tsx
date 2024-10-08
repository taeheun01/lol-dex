// app/champions/page.tsx
import Link from 'next/link';
import { ChampionData } from '../types/Champion'
import { getChampionList,getLatestVersion } from '../utils/serverApi';

export default async function ChampionsPage() {
  const champions: ChampionData[] = await getChampionList();
  const version = await getLatestVersion();
  
  return (
    <div>
    <div className='mt-[100px]' >
    {/* style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }} */}
    <ul className='grid grid-cols-4 ml-[150px] '  >
      {champions.map((champion) => (
        <li className='p-[10px]' key={champion.id} style={{ listStyle: 'none', textAlign: 'center' }}>
          <div >
          {/* <p>{champion.title}</p> */}
          <Link href={`/champion/${champion.id}`}>
          <img className='h-[200px] w-[200px]'
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
            alt={champion.name}
          />
          <h2 className=' w-[200px] bg-black text-white'>{champion.name}</h2>
          </Link>
          </div>
        </li>
      ))}
    </ul>
    </div>
  </div>
);
}

export const revalidate = 86400;