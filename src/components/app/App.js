import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import DocumentTitle from 'react-document-title';
import Footer from '../semantics/Footer';
import Header from '../semantics/Header'; 
import { connect } from 'react-redux';
import { fetchOntology } from '../../actions/OntologyActions';

class App extends Component {

  componentWillMount() {
    this.props.fetchOntology();
  }

  render() {
    return (
      <DocumentTitle title='Mi página Web accesible con metadatos semánticos'>
        <React.Fragment>
          <Header />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Footer />
        </React.Fragment>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ontology: state.ontologyReducer.ontology,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOntology: () =>
      dispatch(fetchOntology()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

