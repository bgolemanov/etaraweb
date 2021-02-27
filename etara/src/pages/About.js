import React from 'react'
import { useTranslation } from 'react-i18next';
import classes from './Stylesheets/Pages.module.css';

function About() {

    const { t } = useTranslation();

    return (
        <div className={classes.Container}>
            <div className={classes.TextContainer}>
            <p>{t('about.part1')}</p>
            <br/>
            <p>{t('about.part2')}</p>
            <br/>
            <p>{t('about.part3')}</p>
            <br/>
            <p>{t('about.part4')}</p>
            <br/>
            <p>{t('about.part5')}</p>
            <br/>
            <p>{t('about.part6')}</p>
            <br/>
            <p>{t('about.part7')}</p>
            </div>
        </div>
    )
}

export default About