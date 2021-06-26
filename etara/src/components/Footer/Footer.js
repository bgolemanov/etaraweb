import React from 'react';
import classes from './Footer.module.css';
import { Route, Switch, Link } from 'react-router-dom';
import Impressum from '../../pages/Impressum';

function Footer() {
  <Switch>
    <Route path="/impressum" component={Impressum} />
  </Switch>;
  return (
    <div className={classes.Mainfooter}>
      <div className={classes.Container}>
        <p className={classes.Footertxt}> <Link to="Impressum">Impressum </Link>
          |{' '}
          <a
            href="https://www.facebook.com/Etara-Wein-Feinkost-158668092550619/"
            alt="Facebook link"
          >
            Facebook
          </a>{' '}
          |{' '}
          <a
            href="https://www.instagram.com/etara_wein_feinkost/"
            alt="Insttagram link"
          >
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
