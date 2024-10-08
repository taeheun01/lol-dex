'use client';

import { useState, useEffect } from 'react';
import { getChampionList } from '../utils/serverApi'; 
import { ChampionData } from '../types/Champion'; 
import { ChampionRotation } from '../types/ChampionRotation';
import Link from 'next/link';

export default function RotationPage() {
  const [rotationData, setRotationData] = useState<ChampionRotation | null>(null);
  const [championList, setChampionList] = useState<ChampionData[]>([]); //목록 상태
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRotationData() {
      try {
        // 무료 로테이션 챔피언 데이터
        const response = await fetch('/api/rotation');
        const data: ChampionRotation = await response.json();

        if (response.ok) {
          setRotationData(data);
        } else {
          setError('데이터를 가져오는 중 에러가 발생했습니다.');
        }

        // 전체 챔피언 목록 
        const champions = await getChampionList();
        setChampionList(champions);
      } catch (err) {
        setError(`데이터를 가져오는 중 오류가 발생했습니다: ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    fetchRotationData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!rotationData || championList.length === 0) {
    return <div>Loading...</div>;
  }

  // 챔피언 ID에 맞는 챔피언 이름과 이미지를 찾기
  const getChampionById = (id: number) => {
    const champion = championList.find((champ) => Number(champ.key) === id);
    if (!champion) {
      console.warn(`Champion with ID ${id} not found in the champion list.`);
    }
    return champion;
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10">무료 로테이션 챔피언 목록</h1>
      <div className='mt-[100px]'>
        <ul className='grid grid-cols-4 ml-[150px] gap-6'>
          {rotationData.freeChampionIds?.map((championId) => {
            const champion = getChampionById(championId);

            return (
              champion ? (
                <li key={champion.id} className='p-[10px]' style={{ listStyle: 'none', textAlign: 'center' }}>
                  <Link href={`/champion/${champion.id}`}>
                    <img
                      src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                      alt={champion.name}
                      className='h-[200px] w-[200px]'
                    />
                    <h2 className='w-[200px] bg-black text-white mt-2'>{champion.name}</h2>
                  </Link>
                </li>
              ) : (
                <li key={championId} className='p-[10px]' style={{ listStyle: 'none' }}>Unknown Champion ID: {championId}</li>
              )
            );
          })}
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-center mt-12">신규 플레이어용 무료 챔피언 목록</h2>
      <div className='mt-[100px]'>
        <ul className='grid grid-cols-4 ml-[150px] gap-6'>
          {rotationData.freeChampionIdsForNewPlayers?.map((championId) => {
            const champion = getChampionById(championId);

            return (
              champion ? (
                <li key={champion.id} className='p-[10px]' style={{ listStyle: 'none', textAlign: 'center' }}>
                  <Link href={`/champion/${champion.id}`}>
                    <img
                      src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                      alt={champion.name}
                      className='h-[200px] w-[200px]'
                    />
                    <h2 className='w-[200px] bg-black text-white mt-2'>{champion.name}</h2>
                  </Link>
                </li>
              ) : (
                <li key={championId} className='p-[10px]' style={{ listStyle: 'none' }}>Unknown Champion ID: {championId}</li>
              )
            );
          })}
        </ul>
      </div>
    </div>
  );
}
