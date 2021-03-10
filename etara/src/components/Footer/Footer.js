import React from 'react'
import { useTranslation } from 'react-i18next';

import classes from './Footer.module.css';

function Footer() {
    return (
        <div className={classes.Mainfooter}>
            <div className={classes.Container}>
            <p className={classes.Footertxt}><a href="/Impressum">Impressum</a> | <a href="https://www.facebook.com/Etara-Wein-Feinkost-158668092550619/" alt="Facebook link">Facebook</a> | <a href="https://www.instagram.com/etara_wein_feinkost/" alt="Insttagram link">Instagram</a></p>
            </div>
        </div>
    )
}

export default Footer
