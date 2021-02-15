import React from 'react';
import { Link } from 'react-router-dom';
import { Cat } from '../../../utils/types';
import cat from '../../../assets/cat.jpg';
import { Avatar, createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(5),
      },
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  }),
);

export default function CatItem(props: { data: Cat }) {
  const classes = useStyles();

  return (
    <Link className="item" to={`/cats/list/${props.data.name}`}>
      <Avatar className={classes.large} alt="elephant" src={cat}></Avatar>
      <h3>{props.data.name}</h3>
    </Link>
  );
}
