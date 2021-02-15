import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Elephant } from '../../../utils/types';
import axios from 'axios';
import elephant from '../../../assets/elephant.png';
import { Card, CardMedia, CardActions } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import { makeStyles } from '@material-ui/core/styles';
import {
  PreviewContainer,
  CardText,
  NavButton,
  MoreButton,
} from '../../../styles/styled';

export default function ElephantPreview() {
  const { t } = useTranslation();

  let { eName } = useParams<{ eName: string }>();

  const [selectedItem, setSelectedItem] = useState<Elephant>();

  function getDataByName(): Promise<Elephant> {
    return axios
      .get(`https://elephant-api.herokuapp.com/elephants/name/${eName}`)
      .then((res) => {
        const elephantItem: Elephant = {
          id: res.data._id,
          name: res.data.name,
          species: res.data.species,
          img: res.data.image,
          gender: res.data.sex,
          dob: res.data.dob,
          dod: res.data.dod,
          more: res.data.wikilink,
          description: res.data.note,
        };
        return elephantItem;
      });
  }

  useEffect(() => {
    getDataByName().then((res) => {
      setSelectedItem(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log('eName: ', eName);
  // console.log('selectedItem: ', selectedItem);

  const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.3)',
      backgroundColor: '#fafafa',
    },
    media: {
      height: 300,
    },
    actions: {
      padding: '20px',
    },
  });

  const classes = useStyles();

  return (
    <PreviewContainer>
      <Card className={classes.card}>
        <CardActions className={classes.actions}>
          <NavButton>
            <Link to="/animals/elephants/list">
              <Icon path={mdiArrowLeft} title="arrow" size={0.8} />
              back
            </Link>
          </NavButton>
        </CardActions>

        <CardMedia
          component="img"
          className={classes.media}
          image={selectedItem?.img !== undefined ? selectedItem.img : elephant}
          title={
            selectedItem?.name !== undefined ? selectedItem.name : 'unknown'
          }
        />
        <CardText>
          <h2>
            {selectedItem?.name !== undefined ? selectedItem.name : 'Unknown'}
          </h2>
          <p>
            <strong>{t('elephants.gender')}</strong>
            {selectedItem?.gender !== undefined
              ? selectedItem.gender
              : 'unknown'}
          </p>
          <p>
            <strong>{t('elephants.species')}</strong>
            {selectedItem?.species !== undefined
              ? selectedItem.species
              : 'unknown'}
          </p>
          <p>
            <strong>{t('elephants.description')}</strong>
            {selectedItem?.description !== undefined
              ? selectedItem.description
              : 'unknown'}
          </p>
          <MoreButton>
            <a
              href={selectedItem?.more !== undefined ? selectedItem.more : '#'}
              target="_blank"
              rel="noreferrer"
            >
              more
            </a>
          </MoreButton>
        </CardText>
      </Card>
    </PreviewContainer>
  );
}
