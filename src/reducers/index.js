import { combineReducers } from 'redux';

// Se importan los reducers
import { ontologyReducer } from './OntologyReducer';

const LOGOUT_USER = 'LOGOUT_USER';

// Se cambia el nombre de rootReducer por appReducer
const appReducer = combineReducers({
  ontologyReducer: ontologyReducer,
});

const initialState = appReducer({}, {});

/*
  Cuando hay dispatch de LOGOUT_USER el estado de la aplicacion va a ser igual
  que el initialState. Esto con el fin de que un usuario 2 cuando se logea no vea
  la informacion de un usuario1 que se deslogeo anteriormente
*/

const RootReducer = (state, action) => {
  if (action.type === LOGOUT_USER) {
    state = initialState;
  }

  return appReducer(state, action);
};

export default RootReducer;
