import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
//import Sparql from './Sparql';
// import Sparql2 from './Sparql2';

class App extends Component {

  componentWillMount() {
    console.log('this.props')
    console.log(this.props)
    this.props.fetchOntology()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Accessibility Web - v1</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Sparql /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
