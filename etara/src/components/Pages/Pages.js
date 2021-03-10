import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import News from './pages/News';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';

function Pages() {
    return (
        <div>
            <Router>
                <Navigation />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/news" component={News} />
                        <Route path="/products" component={Products} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default Pages
