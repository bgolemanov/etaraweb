import React from 'react'
import { useTranslation } from 'react-i18next';

import * as AiIcons from 'react-icons/ai'
import classes from './Contact.module.css';

function Contact() {

    const { t } = useTranslation();
    return (
        <div className={classes.ContainerMain}>
            <div className={classes.Container}>
                <div className={classes.ContainerLeft}>
                    <div className={classes.TextContainer}>
                        <p>{t('contact.part1')}</p>
                        <br/>
                        <p>{t('contact.part2')}</p>
                        <br/>
                        <p>{t('contact.part3')}</p>
                        <p>{t('contact.part4')}</p>
                        <p>{t('contact.part5')}</p>
                        <p>{t('contact.part6')}</p>
                        <p>{t('contact.part7')}</p>
                        <br/>
                        <a href="https://www.google.com/maps/place/Rotwasserstra%C3%9Fe+2,+63743+Aschaffenburg,+Germany/@49.9599653,9.1685199,17z/data=!3m1!4b1!4m5!3m4!1s0x47bd486bff12a03b:0x6ab2fca78b43f9c6!8m2!3d49.9599653!4d9.1707086?hl=en" alt="Map link"><img src={t('maps.part1')} alt="#" className={classes.MapLeft}></img></a>
                        <br/>
                        <p>{t('contact.part8')}</p>
                        <p>{t('contact.part9')}</p>
                        <p>{t('contact.part10')}</p>
                        <br/><br/>
                        <div className={classes.Centeredcontainer}><p>{t('contact.part11')} <a href="https://www.facebook.com/Etara-Wein-Feinkost-158668092550619/" alt="Facebook link"><AiIcons.AiOutlineFacebook className={classes.Contactinfo}/></a><a href="https://www.instagram.com/etara_wein_feinkost/" alt="Insttagram link"><AiIcons.AiOutlineInstagram className={classes.Contactinfo}/></a></p></div>
                        </div>
                    </div>
                <div className={classes.ContainerRght}>
                    <a href="https://www.google.com/maps/place/Rotwasserstra%C3%9Fe+2,+63743+Aschaffenburg,+Germany/@49.9599653,9.1685199,17z/data=!3m1!4b1!4m5!3m4!1s0x47bd486bff12a03b:0x6ab2fca78b43f9c6!8m2!3d49.9599653!4d9.1707086?hl=en" alt="Map link"><img src={t('maps.part1')} alt="#" className={classes.MapRight}></img></a>
                </div>
            </div>
        </div>
    )
}

export default Contact