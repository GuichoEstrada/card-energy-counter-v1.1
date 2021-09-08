import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { FaTwitch } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';

import IMG1 from '../../../assets/images/EM-NANIMGNM.png';

import './left-column.styles.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(2),
    margin: theme.spacing(3),
    textAlign: 'center',
    color: '#fff',
  },
  right_nav: {
    width: '100%',
    display: 'flex'
  },
  right_fieldset: {
    border: '4px',
    borderStyle: 'solid',
    borderColor: '#fff',
    borderRadius: '50px',
    margin: 50,
    padding: 50,
  }
}));

export default function RightColumn() {
  const classes = useStyles();

  return (
    <fieldset className={classes.right_fieldset} id="right-fieldset">
      <legend className={classes.legend} id="left-legend">
        <h1>Welcome</h1>
        <img src={IMG1} alt='img-1' width='50px' height='50px'/>
      </legend>
      <div className={classes.root}>
        <div className={classes.right_nav} id="right-nav">
            
            <Grid container spacing={2}>
                <Grid item lg={12} className='access-container'>
                    <h2>to the<br/> MGNM Axie Arena Tracker</h2>
                    <h6>*Title is subject to change</h6>
                    <hr/>
                    <p>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.</p>
                </Grid>
            </Grid>
        </div>

        <hr />

        <div className='icons-container'>https://www.twitch.tv/magnamlive
          <h3>Follow us!</h3>
          <FaFacebookSquare className='social-media-icon-fb grow'/>
          <a href="https://www.twitch.tv/magnamlive" target="_blank" rel="noreferrer"><FaTwitch className='social-media-icon-twtch grow'/></a>
          <a href="https://discord.gg/MrgZ2cVr" target="_blank" rel="noreferrer"><FaDiscord className='social-media-icon-dsc grow'/></a>
        </div>

        <Link to='/main'><button className='btn fourth'><span>Enter</span></button></Link>

      </div>
    </fieldset>
  );
}
