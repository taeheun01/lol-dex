// app/champions/page.tsx
import Link from 'next/link';
import { ChampionData } from '../types/Champion'
import { getChampionList,getLatestVersion } from '../utils/serverApi';

export default async function ChampionsPage() {
  const champions: ChampionData[] = await getChampionList();
  const version = await getLatestVersion();
  
  return (
    <div>
    <h1>Champion List</h1>
    <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
      {champions.map((champion) => (
        <li key={champion.id} style={{ listStyle: 'none', textAlign: 'center' }}>
          <h2>{champion.name}</h2>
          <p>{champion.title}</p>
          <Link href={`/champion/${champion.id}`}>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
            alt={champion.name}
            style={{ width: '100px', height: '100px' }}
          />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
}

export const revalidate = 86400;