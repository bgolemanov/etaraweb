import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

function About() {
  const { t } = useTranslation();

  return (
    <Jumbotron className="vh-100 mb-0">
      <Container>
        <br />
        <p>{t('about.part1')}</p>
        <p>{t('about.part2')}</p>
        <p>{t('about.part3')}</p>
        <p>{t('about.part4')}</p>
        <p>{t('about.part5')}</p>
        <p>{t('about.part6')}</p>
        <p>{t('about.part7')}</p>
      </Container>
    </Jumbotron>
  );
}

export default About;
