import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Main from './Main';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';



const App = () => {
  return (
    <div className="page-container">
    <div className="content-wrap">
    <BrowserRouter>
      <Navigation />
      <Main />
    </BrowserRouter>
    </div>
    <Footer />
    </div>
  );
}

export default App;
