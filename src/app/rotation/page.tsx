'use client';

import { useState, useEffect } from 'react';
import { getChampionList } from '../utils/serverApi'; 
import { ChampionData } from '../types/Champion'; 
import { ChampionRotation } from '../types/ChampionRotation'
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
      <h1>무료 로테이션 챔피언 목록</h1>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        {rotationData.freeChampionIds?.map((championId) => {
          const champion = getChampionById(championId);

          return (
            champion ? (
              <li key={champion.id} >
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                  alt={champion.name}
                  width={100}
                />
                <p>{champion.name}</p>
              </li>
            ) : (
              <li key={championId}>Unknown Champion ID: {championId}</li>
            )
          );
        })}

      </ul>

      <h2>신규 플레이어용 무료 챔피언 목록</h2>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {rotationData.freeChampionIdsForNewPlayers?.map((championId) => {
          const champion = getChampionById(championId);

          return (
            champion ? (
              <li key={champion.id} >
                <Link href={`/champion/${champion.id}`}>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                  alt={champion.name}
                  width={100}
                />
                </Link>
                <p>{champion.name}</p>
              </li>
            ) : (
              <li key={championId}>Unknown Champion ID: {championId}</li>
            )
          );
        })}
      </ul>
    </div>
  );
}
