import {ChampionData} from "../types/Champion"
import { Item } from "../types/Item";

//최신버전 가져오기
export async function getLatestVersion(): Promise<string> {
    try {
        const res = await fetch("https://ddragon.leagueoflegends.com/api/versions.json")
    
        const versions: string[] = await res.json();

        return versions[0];
    } catch (error) {
        console.error("fetching오류오류",error);
        throw error
    }
}

// 챔피언 목록
export async function getChampionList(): Promise<ChampionData[]> {
    try {
        const version = await getLatestVersion();

        const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`)
    
        const ChampionData = await response.json()
        
        return Object.values(ChampionData.data) as ChampionData[]
    } catch (error) {
        console.error ("champion list error 애러애러", error);
        throw error
    }
}


// 특정 챔피언의 상세 정보
export async function getChampionDetails(championId: string): Promise<ChampionData> {
    try {
      const version = await getLatestVersion();
      
      const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${championId}.json`);
      
      if (!response.ok) {
        throw new Error(`해당 챔피언 정보를 불러오는 데 실패했습니다. 상태 코드: ${response.status}`);
      }
  
      const championDetailData = await response.json();
      // 챔피언 ID로 상세 정보 빼오기
      return championDetailData.data[championId] as ChampionData;
    } catch (error) {
      console.error("특정 챔피언 상세 정보 가져오기 실패실패:", error);
      throw error;

    }
  }
  

  
//아이템 목록
export async function getItemList(): Promise<Item[]> {
  try {
    const version = await getLatestVersion(); 
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch item data");
    }

    const itemData = await response.json();
    return Object.values(itemData.data) as Item[]; // 아이템 목록을 배열로 반환
  } catch (error) {
    console.error("Error fetching item list:", error);
    throw error;
  }
}
