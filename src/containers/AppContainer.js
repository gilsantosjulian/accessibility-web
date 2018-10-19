import { connect } from 'react-redux';
import AppComponent from '../components/app/App';
import { fetchOntology } from '../actions/OntologyActions';

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

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent);

export default AppContainer;
