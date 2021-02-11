import React, { useEffect, useState } from 'react';
import getDataFromApi from '../../../services/getDataFromApi';
import ElephantItem from './ElephantItem';
import { Elephant } from '../../../utils/types';
import { ItemsContainer } from '../../../styles/styled';

export default function ElephantList() {
  const [info, setInfo] = useState<Elephant[]>([]);

  useEffect(() => {
    getDataFromApi().then((res) => {
      setInfo(res);
    });
  }, []);

  return (
    <ItemsContainer>
      {info.map((elephant) => {
        return <ElephantItem data={elephant} key={elephant.id} />;
      })}
    </ItemsContainer>
  );
}
