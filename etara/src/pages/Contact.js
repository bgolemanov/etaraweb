import React from 'react';
import { useTranslation } from 'react-i18next';

// import * as AiIcons from 'react-icons/ai';
// import classes from './Contact.module.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import shopImage from '../assets/photos/etaraShop.jpg';

function Contact() {
  const { t } = useTranslation();
  return (
    <Jumbotron className="vh-100 mb-0">
      <Container>
        <Row>
          <Image src={shopImage} className="img-Header"></Image>
        </Row>
        <Row>
          <Col xs={12} sm={4} lg={{ offset: 1, span: 6 }}>
            <br />
            <br />
            <p>{t('contact.part1')}</p> <br />
            <p>{t('contact.part2')}</p>
            <p>
              {t('contact.part3')}
              <br />
              {t('contact.part4')}
            </p>
            <p>
              {t('contact.part12')} <br />
              {t('contact.part13')}
              <br />
              09.30 - 20.00
            </p>
            <p>
              {t('contact.part5')} <br />
              {t('contact.part6')} <br />
              {t('contact.part7')}
            </p>
            <p>
              {t('contact.part8')} <br />
              {t('contact.part9')} <br />
              {t('contact.part10')}
            </p>
          </Col>
          <Col xs={12} sm={7} lg={5}>
            <br />
            <br />
            <Image
              src={t('maps.part1')}
              className="img-fluid img-thumbnail"
            ></Image>
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

// {/* <div className={classes.Centeredcontainer}>
// <p>
//   {t('contact.part11')}{' '}
//   <a
//     href="https://www.facebook.com/Etara-Wein-Feinkost-158668092550619/"
//     alt="Facebook link"
//   >
//     <AiIcons.AiOutlineFacebook className={classes.Contactinfo} />
//   </a>
//   <a
//     href="https://www.instagram.com/etara_wein_feinkost/"
//     alt="Insttagram link"
//   >
//     <AiIcons.AiOutlineInstagram className={classes.Contactinfo} />
//   </a>
// </p>
// </div> */}

export default Contact;
