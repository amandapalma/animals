import React from 'react';
import { Link } from 'react-router-dom';
import { Elephant } from '../../../utils/types';
import elephant from '../../../assets/elephant.png';
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

export default function ElephantItem(props: { data: Elephant }) {
  const classes = useStyles();

  return (
    <Link className="item" to={`/animals/elephants/list/${props.data.name}`}>
      <Avatar
        className={classes.large}
        alt="elephant"
        src={props.data.img ? props.data.img : elephant}
      ></Avatar>
    </Link>
  );
}
