import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import { useTranslation } from 'react-i18next';
import * as MdIcons from 'react-icons/md';

function Navbar() {

    const { t, i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
      };

    return (
        <div className={classes.Navbar}>
            {/* <h1 className={classes.Logo}>Etara!</h1> */}
                <ul>
                    <li className={classes.Navtext}><Link to='/'>{t('menus.home')}</Link></li>
                    <li className={classes.Navtext}><Link to='/News'>{t('menus.news')}</Link></li>
                    <li className={classes.Navtext}><Link to='/Products'>{t('menus.products')}</Link></li>
                    <li className={classes.Navtext}><Link to='/About'>{t('menus.about')}</Link></li>
                    <li className={classes.Navtext}><Link to='/Contact'>{t('menus.contact')}</Link></li>
                    </ul>
                    <p className={classes.Separator} />
                <ul>    
                    <li className={classes.Navtext} onClick={() => changeLanguage('bg')}><a href="#Bulgarian"><MdIcons.MdLanguage /><span>{t("langmemus.bulgarian")}</span></a></li>
                    <li className={classes.Navtext} onClick={() => changeLanguage('de')}><a href="#German"><MdIcons.MdLanguage /><span>{t("langmemus.german")}</span></a></li>
                </ul>
        </div>
    )
}

export default Navbar
