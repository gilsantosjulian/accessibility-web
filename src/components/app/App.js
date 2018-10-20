import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import DocumentTitle from 'react-document-title';
import A from '../semantics/a/A';
import Footer from '../semantics/footer/Footer';
import Form from '../semantics/form/Form';
import Header from '../semantics/header/Header';
import Input from '../semantics/input/Input';
import Li from '../semantics/li/Li';
import Main from '../semantics/main/Main';
import Nav from '../semantics/nav/Nav';
import Ul from '../semantics/ul/Ul';

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
          <Nav>
            <Ul>
              <Li><A href='#' rel='tab' title='Inicio' /></Li>
              <Li><A href='#' rel='tab' title='Nuestro Equipo' /></Li>
              <Li><A href='#' rel='tab' title='Servicios' /></Li>
              <Li><A href='#' rel='tab' title='Contacto' /></Li>
            </Ul>
            <Form>
              <Input
                name="campo de entrada"
                type="search"
                placeholder="Consuta de búsqueda"
              />
              <Input
                name="boton"
                type="submit"
                value="Buscar"
              />
            </Form>
          </Nav>
          <Main>
          </Main>
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

