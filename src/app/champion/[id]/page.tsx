import { getChampionDetails, getLatestVersion } from '../../utils/serverApi';
import { ChampionData} from '../../types/Champion';
import { Metadata } from 'next';


export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const champion = await getChampionDetails(params.id);
  
  return {
    title: `${champion.name} - Champion Details`,
    description: champion.blurb,
  };
}

export default async function ChampionDetailPage({ params }: { params: { id: string } }) {
  const champion: ChampionData = await getChampionDetails(params.id);
  const version = await getLatestVersion();

  return (
    <div>
      {/* 챔피언 기본 정보 */}
      <div
      className='min-h-[1000px] text-white bg-black'
      style={{
        backgroundImage: `url(${`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        opacity: 0.5,
      
      }}>
      <div className=''>
      <img className=''
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
            alt={champion.name}
            style={{ width: '100px', height: '100px' }}
          />
          <div className=''>
          <h1 className='p-[20px] m-[20px]'>{champion.name}</h1>
          <p>{champion.title}</p>
      <p>{champion.blurb}</p>
      </div>
</div>
      {/* 챔피언 스탯 정보 */}
      {/* <div>
        <strong>Attack:</strong> {champion.info.attack} <br />
        <strong>Defense:</strong> {champion.info.defense} <br />
        <strong>Magic:</strong> {champion.info.magic} <br />
        <strong>Difficulty:</strong> {champion.info.difficulty}
      </div> */}
      

      {/* 스킬 목록 */}
      <h2>Skills</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
        {champion.spells.map((spell, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/${spell.image.full}`}
              alt={spell.name}
              style={{ width: '80px', height: '80px' }}
            />
            <h3>{spell.name}</h3>
            <p>{spell.description}</p>
          </div>
        ))}
      </div>
</div>
     {/* 스킨목록 */}
      <h2>Skins</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {champion.skins.map((skin, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <img className='min-h-[300px]'
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skin.num}.jpg`}
              alt={skin.name}
              style={{ width: '100%' }}
            />
            <p>{skin.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
