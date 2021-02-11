import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import elephant from '../../../assets/elephant.png';
import {
  Caption,
  HomeImg,
  ItemsContainer,
  GridItem,
} from '../../../styles/styled';

import Icon from '@mdi/react';
import {
  mdiNavigation,
  mdiEye,
  mdiWall,
  mdiSnake,
  mdiTree,
  mdiPaletteSwatch,
  mdiJumpRope,
  mdiElephant,
  mdiHeadSnowflake,
} from '@mdi/js';

export default function ElephantHome() {
  const { t } = useTranslation();
  return (
    <div>
      <Link to="/animals/elephants/list">{t('header.elephantList')} </Link>
      <h1>{t('header.elephants')}</h1>
      <HomeImg>
        <img alt="indian elephant" src={elephant}></img>
      </HomeImg>
      <ItemsContainer>
        <GridItem>
          <Icon
            path={mdiEye}
            title="User Profile"
            size={1}
            horizontal
            vertical
            color="black"
          />
          <p>{t('home.p1')}</p>
        </GridItem>
        <GridItem>
          <Icon
            path={mdiWall}
            title="User Profile"
            size={1}
            horizontal
            vertical
            color="black"
          />
          <p>{t('home.p2')}</p>
        </GridItem>
        <GridItem>
          <Icon
            path={mdiNavigation}
            title="User Profile"
            size={1}
            horizontal
            vertical
            rotate={-125}
            color="black"
          />
          <p>{t('home.p3')}</p>
        </GridItem>
        <GridItem>
          <Icon
            path={mdiSnake}
            title="User Profile"
            size={1}
            horizontal
            vertical
            color="black"
            rotate={180}
          />
          <p>{t('home.p4')}</p>
        </GridItem>
        <GridItem>
          <Icon
            path={mdiTree}
            title="User Profile"
            size={1}
            horizontal
            vertical
            color="black"
            rotate={180}
          />
          <p>{t('home.p5')}</p>
        </GridItem>
        <GridItem>
          <Icon
            path={mdiPaletteSwatch}
            title="User Profile"
            size={1}
            horizontal
            vertical
            color="black"
          />
          <p>{t('home.p6')}</p>
        </GridItem>
        <GridItem>
          <Icon
            path={mdiJumpRope}
            title="User Profile"
            size={1}
            horizontal
            vertical
            color="black"
            rotate={180}
          />
          <p>{t('home.p7')}</p>
        </GridItem>
        <GridItem>
          <Icon
            path={mdiHeadSnowflake}
            title="User Profile"
            size={1}
            horizontal
            vertical
            color="black"
            rotate={180}
          />
          <p>{t('home.p8')}</p>
        </GridItem>
        <GridItem>
          <Icon
            path={mdiElephant}
            title="User Profile"
            size={1}
            horizontal
            vertical
            color="black"
            rotate={180}
          />
          <p>{t('home.p9')}</p>
        </GridItem>
      </ItemsContainer>
      <Caption>{t('home.note')}</Caption>
    </div>
  );
}
