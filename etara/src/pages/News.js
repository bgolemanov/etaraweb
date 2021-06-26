import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

function News() {
  const { t } = useTranslation();
  return (
    <Jumbotron className="vh-100 mb-0">
      <Container>
        <br />
        <p>{t('news.part1')}</p>
        <p>{t('news.part2')}</p>
        <p>{t('news.part3')}</p>
      </Container>
    </Jumbotron>
  );
}

export default News;
