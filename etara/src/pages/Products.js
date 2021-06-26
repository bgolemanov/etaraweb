import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import prod1 from '../assets/photos/prods1.jpg';
import prod2 from '../assets/photos/prods2.jpg';
import prod3 from '../assets/photos/prods3.jpg';

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
        <br />
        <br />
        <Row>
          <Col sm={12} lg={{ offset: 3, span: 6}}>
        <Carousel fade controls={false}>
          <Carousel.Item>
            <img className="d-bloc imgCaro" src={prod1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block imgCaro" src={prod2} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block imgCaro" src={prod3} alt="First slide" />
          </Carousel.Item>
        </Carousel>
          </Col>
        </Row>
        <br />
      </Container>
    </Jumbotron>
  );
}

export default Products;
