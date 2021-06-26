import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import prod1 from '../assets/photos/etaraNews1.jpg';
import prod2 from '../assets/photos/etaraNews2.jpg';
import prod3 from '../assets/photos/etaraNews3.jpg';

import shopOpening from '../assets/photos/etaraOpening.jpg';

function News() {
  const { t } = useTranslation();
  return (
    <Jumbotron className="vh-100 mb-0">
      <Container>
        <Row>
          <Image src={shopOpening} className="img-Header"></Image>
        </Row>
        <br />
        <p>{t('news.part1')}</p>
        <p>{t('news.part2')}</p>
        <br />
        <br />
        <Row>
          <Col sm={12} lg={{ offset: 3, span: 6 }}>
            <Carousel fade controls={false}>
              <Carousel.Item>
                <img className="d-bloc imgCaro" src={prod1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block imgCaro"
                  src={prod2}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block imgCaro"
                  src={prod3}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <br />
      </Container>
    </Jumbotron>
  );
}

export default News;
