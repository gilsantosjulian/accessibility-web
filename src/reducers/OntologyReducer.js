import { FETCH_ONTOLOGY } from '../actions/OntologyActions';

const initialState = {
  ontology: [],
};

export function ontologyReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ONTOLOGY:
      return Object.assign({}, {}, { ontology: action.payload });
    default:
      return state;
  }
}