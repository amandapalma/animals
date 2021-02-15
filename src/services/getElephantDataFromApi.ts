import axios from 'axios';
import { Elephant } from '../utils/types';

// Lo mismo que en cats, los endpoints no se consumen en el servicio, se consumen en el componente donde son útiles.
// El map ese no aporta valor a la aplicación dado que los datos ya te vienen directamente de la llamada y aumenta la complejidad sin razón.
export default function getElephantDataFromApi(): Promise<Elephant[]> {
  return axios
    .get(`https://elephant-api.herokuapp.com/elephants`)
    .then((res) => {
      const items: Elephant[] = res.data.map((item: any) => {
        const elephant: Elephant = {
          id: item._id,
          name: item.name,
          species: item.species,
          img: item.image,
          gender: item.sex,
          dob: item.dob,
          dod: item.dod,
          more: item.wikilink,
          description: item.note,
        };
        return elephant;
      });
      return items;
    });
}

// Es decir, debería solo ser esto:

// export default function getElephantDataFromApi(): Promise<Elephant[]> {
//   return axios
//     .get(`https://elephant-api.herokuapp.com/elephants`)
//  
// }
