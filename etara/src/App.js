import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Main from './Main';
import Navigation from './components/Navigation/bootstrap-navbar/navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
