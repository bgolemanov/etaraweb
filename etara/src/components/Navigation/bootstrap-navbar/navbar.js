import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Navbarbs() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" expanded={expanded}>
        <Container>
        <Navbar.Brand href="#home">Etara</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" onClick={() => setExpanded(false)} to="/">{t('menus.home')}</Link>
            <Link className="nav-link" onClick={() => setExpanded(false)} to="/News">{t('menus.news')}</Link>
            <Link className="nav-link" onClick={() => setExpanded(false)} to="/Products">{t('menus.products')}</Link>
            <Link className="nav-link" onClick={() => setExpanded(false)} to="/About">{t('menus.about')}</Link>
            <Link className="nav-link" onClick={() => setExpanded(false)} to="/Contact">{t('menus.contact')}</Link>
                <li className="nav-link" onClick={() => {changeLanguage('bg'); setExpanded(false)}}>
                  {t('langmemus.bulgarian')}
                </li>
                <li className="nav-link" onClick={() => {changeLanguage('de'); setExpanded(false)}}>
                  {t('langmemus.german')}
                </li>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarbs;
