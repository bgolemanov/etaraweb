import React from 'react'
import { useTranslation } from 'react-i18next';
import classes from './Home.module.css';
import Logo from '../assets/logo/logo99.png';
import Slideshow from '../components/Slideshow/Slideshow';


function Home() {
    
    const { t } = useTranslation();
    return (
        <div>
            <Slideshow className={classes.Container}/>
            <div className={classes.Landingheader}>
                    <h1 className={classes.Heading}>{t('home.part1')}</h1>
                    <img src={Logo} className={classes.Logo} alt="#"/>
                    <h1 className={classes.Heading}>{t('home.part2')}</h1>
            </div>
        </div>
    )
}

export default Home