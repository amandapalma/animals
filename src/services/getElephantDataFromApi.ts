import axios from 'axios';
import { Elephant } from '../utils/types';

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
