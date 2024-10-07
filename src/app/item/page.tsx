import { getItemList } from "../utils/serverApi";
import {getLatestVersion } from '../utils/serverApi';

export default async function ItemPage() {
  const items = await getItemList(); 
  const version = await getLatestVersion();
  return (
    <div>
      <h1>Item List</h1>
      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {items.map((item) => (
          <li key={item.name}>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
              alt={item.name}
              style={{ width: '100px', height: '100px' }}
            />
            {item.name} - {item.gold.total} Gold
          </li>
        ))}
      </ul>
    </div>
  );
}
