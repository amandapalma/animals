import axios from 'axios';
import { Cat } from '../utils/types';

// export default function getCatDataFromApi(): Promise<any> {
//   return axios.get(`https://api.thecatapi.com/v1/breeds`).then((res) => {
//     // console.log('data', res.data);
//     const items: Cat[] = res.data.map((item: any) => {
//       const cat: Cat = {
//         id: item.id,
//         name: item.name,
//         origin: item.origin,
//         more: item.wikipedia_url,
//         description: item.description,
//         img: item.image, //can´t access to item.image.url because image seems to be undefined
//       };
//       return cat;
//     });
//     return items;
//   });
// }

export default function getCatDataFromApi(): Promise<any> {
  return axios.get(`https://api.thecatapi.com/v1/breeds`);
}
