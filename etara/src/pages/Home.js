import React from 'react'
import { useTranslation } from 'react-i18next';
import classes from './Home.module.css';
import Logo from '../assets/logo/logo99.png';
import Slideshow from '../components/Slideshow/Slideshow';

import Jumbotron from 'react-bootstrap/Jumbotron';


function Home() {
    
    const { t } = useTranslation();
    return (
        <Jumbotron className="vh-100 mb-0">
        <div>
            <Slideshow className={classes.Container}/>
            <div className={classes.Landingheader}>
                    <h1 className={classes.Heading}>{t('home.part1')}</h1>
                    <img src={Logo} className={classes.Logo} alt="#"/>
                    <h1 className={classes.Heading}>{t('home.part2')}</h1>
            </div>
        </div>
        </Jumbotron>
    )
}

export default Home