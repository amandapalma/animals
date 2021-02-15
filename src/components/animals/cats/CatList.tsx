import React, { useEffect, useState } from 'react';
import getCatDataFromApi from '../../../services/getCatDataFromApi';
import CatItem from '../cats/CatItem';
import { Cat } from '../../../utils/types';
import { ItemsContainer } from '../../../styles/styled';

export default function ElephantList() {
  const [info, setInfo] = useState<Cat[]>([]);

  useEffect(() => {
    getCatDataFromApi().then((res: React.SetStateAction<Cat[]>) => {
      setInfo(res);
    });
  }, []);

  return (
    <>
      <h1>catlist component</h1>
      <ItemsContainer>
        {info.map((cat) => {
          return <CatItem data={cat} key={cat.id} />;
        })}
      </ItemsContainer>
    </>
  );
}
