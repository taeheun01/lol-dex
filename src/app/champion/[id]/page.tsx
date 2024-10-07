import { getChampionDetails, getLatestVersion } from '../../utils/serverApi';
import { ChampionData} from '../../types/Champion';
import { Metadata } from 'next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel"


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
      <div
      className="min-h-[1000px] max-h-[1000px] text-white bg-black bg-opacity-30"
      style={{
        backgroundImage: `url(${`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundBlendMode: "darken", // 백그라운드를 더 어둡게 처리
      }}
    >
      {/* 카드 컨테이너 */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg p-10 rounded-lg shadow-lg max-w-6xl w-full">
          {/* 이미지와 기본 정보 */}
          <div className="flex items-center space-x-6 mb-10">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
              alt={champion.name}
              className="w-24 h-24 rounded-lg shadow-md"
            />
            <div>
              <h1 className="text-4xl font-bold">{champion.name}</h1>
              <p className="text-lg italic">{champion.title}</p>
              <p className="mt-4 max-w-2xl text-sm">{champion.blurb}</p>
            </div>
          </div>

          {/* 패시브와 스킬 목록을 카드에 묶어서 배치 */}
          <div className="flex space-x-10">
            {/* 스킬 목록 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-4 gap-4">
                {champion.spells.map((spell, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.image.full}`}
                      alt={spell.name}
                      className="w-20 h-20 mb-2 rounded-lg shadow-md"
                    />
                    <h4 className="font-medium">{spell.name}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* 패시브 정보 */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Passive</h3>
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${champion.passive.image.full}`}
                alt={champion.passive.name}
                className="w-20 h-20 mb-2 rounded-lg shadow-md"
              />
              <h4 className="font-medium">{champion.passive.name}</h4>
              
            </div>
          </div>
        </div>
      </div>
</div>
      {/* 스킨목록 */}
      <h2 className="text-2xl font-semibold mt-12 ml-12">Skins</h2>
      <Carousel className="grid grid-cols-4 gap-4 p-4">
        {champion.skins.map((skin, index) => (
          <CarouselContent key={index} className="text-center">
            <CarouselItem>
              <img
                className="w-full min-h-[300px] rounded-lg shadow-md"
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skin.num}.jpg`}
                alt={skin.name}
              />
              <p className="mt-2">{skin.name}</p>
            </CarouselItem>
          </CarouselContent>
        ))}
      </Carousel>
    
    </div>
  );
}