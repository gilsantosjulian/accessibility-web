import {
  FETCH_ONTOLOGY,
  GET_METADATA
} from '../actions/OntologyActions';

const initialState = {
  ontology: {},
};

export function ontologyReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ONTOLOGY:
      return Object.assign({}, {}, { ontology: action.payload });
    case GET_METADATA:
      let footer_metadata = state.ontology['rdf:RDF']['rdf:Description'].find((item) =>
        item.id[0]['_'] == action.payload
          ? item.id[0]
          : null
      );
      return Object.assign({}, state, { [action.payload]: footer_metadata });
    default:
      return state;
  }
}