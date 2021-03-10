import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home';
import News from './pages/News';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Impressum from './pages/Impressum';

const Main = () => (
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/news" component={News} />
    <Route path="/products" component={Products} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/impressum" component={Impressum} />
  </Switch>
);

export default Main;