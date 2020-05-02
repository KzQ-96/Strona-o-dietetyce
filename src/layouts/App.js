import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import Page from './Page';


class App extends Component {
  render() {
    return (
      <Router>
              {<Navigation />}
              <section className="blog">
                {<Page />}
              </section>
          <footer>
            {<Footer />}
          </footer>
      </Router>
    );
  }
}

export default App;
