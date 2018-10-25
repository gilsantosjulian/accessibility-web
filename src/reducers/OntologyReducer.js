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
      let metadata = state.ontology['rdf:RDF']['owl:NamedIndividual'].find((item) => 
        item['elements:id'][0] == action.payload
          ? item
          : null
      );
    
      return Object.assign({}, state, { [action.payload]: metadata });
    default:
      return state;
  }
}