import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Cat } from '../../../utils/types';
import axios from 'axios';
import cat from '../../../assets/cat.jpg';
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

  let { cName } = useParams<{ cName: string }>();
  console.log(cName);

  const [selectedItem, setSelectedItem] = useState<Cat>();

  function getCatDataByName(): Promise<Cat> {
    return axios
      .get(`https://api.thecatapi.com/v1/breeds/search?q=Aegean`)
      .then((res) => {
        console.log(res.data);
        const catItem: Cat = {
          id: res.data.id,
          name: res.data.name,
          origin: res.data.origin,
          more: res.data.wikipedia_url,
          description: res.data.description,
          img: res.data.image,
        };
        return catItem;
      });
  }

  useEffect(() => {
    getCatDataByName().then((res) => {
      setSelectedItem(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log('cName: ', cName);
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
            <Link to="/animals/cats/list">
              <Icon path={mdiArrowLeft} title="arrow" size={0.8} />
              back
            </Link>
          </NavButton>
        </CardActions>

        <CardMedia
          component="img"
          className={classes.media}
          image={cat}
          title={
            selectedItem?.name !== undefined ? selectedItem.name : 'unknown'
          }
        />
        <CardText>
          <h2>
            {selectedItem?.name !== undefined ? selectedItem.name : 'Unknown'}
          </h2>
          <p>
            <strong> cat origin</strong>
            {selectedItem?.origin !== undefined
              ? selectedItem.origin
              : 'unknown'}
          </p>
          <p>
            <strong>{t('cats.description')}</strong>
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
