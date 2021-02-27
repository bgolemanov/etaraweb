import React from 'react'
import { useTranslation } from 'react-i18next';
import classes from './Stylesheets/Pages.module.css';

function News() {
    const { t } = useTranslation();
    return (
        <div className={classes.Container}>
            <div className={classes.TextContainer}>
            <p>{t('news.part1')}</p>
            <br/>
            <p>{t('news.part2')}</p>
            <br/><br/>
            <p>{t('news.part3')}</p>
            </div>
        </div>
    )
}

export default News
