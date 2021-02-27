import React from 'react'
import { useTranslation } from 'react-i18next';
import classes from './Stylesheets/Pages.module.css';

function Products() {

    const { t } = useTranslation();

    return (
        <div className={classes.Container}>
            <div className={classes.TextContainer}>
            <p>{t('products.part1')}</p>
            <br/>
            <ul className={classes.Lists}>
            <li>{t('products.part2')}</li>
            <li>{t('products.part3')}</li>
            <li>{t('products.part4')}</li>
            <li>{t('products.part5')}</li>
            <li>{t('products.part6')}</li>
            <li>{t('products.part7')}</li>
            <li>{t('products.part8')}</li>
            <li>{t('products.part9')}</li>
            </ul>
            <br/><br/>
            <p>{t('productsinfo.part1')}</p>
            <br/>
            <p>{t('productsinfo.part2')}</p>
            </div>
        </div>
    )
}

export default Products
