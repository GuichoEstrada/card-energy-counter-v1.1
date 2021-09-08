import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import IMG2 from '../../../assets/images/Carrot Pog-test3.png';

import './right-column.styles.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(4),
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
       <legend className={classes.legend} id="right-legend">
        <h1>Gain Access</h1>
        <img src={IMG2} alt='img-1' width='50px' height='50px'/>
      </legend>
      <div className={classes.root}>
        <div className={classes.right_nav} id="right-nav">
            
            <Grid container spacing={2}>
                <Grid item lg={12} className='access-container'>
                    <h2>PLEASE ENTER<br/>YOUR ACCESS CODE:</h2>
                    <div className="form__group field">
                      <input type="input" className="form__field" placeholder="Access Code" name="accessCode" id='accessCode' required />
                      <label className="form__label">Access Code</label>
                    </div>
                    <Link to='/main'><button className='btn fourth'><span>Submit</span></button></Link>
                </Grid>
            </Grid>
        </div>

      </div>
    </fieldset>
  );
}
