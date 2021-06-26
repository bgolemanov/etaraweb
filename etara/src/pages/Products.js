import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Products() {
  const { t } = useTranslation();

  return (
    <Jumbotron className="vh-100 mb-0">
      <Container>
        <br />
        <p>{t('products.part1')}</p>
        <br />
        <ul>
          <li>{t('products.part2')}</li>
          <li>{t('products.part3')}</li>
          <li>{t('products.part4')}</li>
          <li>{t('products.part5')}</li>
          <li>{t('products.part6')}</li>
          <li>{t('products.part7')}</li>
          <li>{t('products.part8')}</li>
          <li>{t('products.part9')}</li>
        </ul>
        <br />
        <br />
        <p>{t('productsinfo.part1')}</p>
        <p>{t('productsinfo.part2')}</p>
      </Container>
    </Jumbotron>
  );
}

export default Products;
