import axios from 'axios';
import { LOCAL_URL, REMOTE_URL } from '../consts';
var parseString = require('xml2js').parseString;

export const FETCH_ONTOLOGY = 'FETCH_ONTOLOGY';

export function fetchOntology() {
  return ((dispatch) => {
    axios.get(LOCAL_URL)
    .then((res) => {
        parseString(res.data, function (err, result) {
            console.dir(result);
            dispatch({ type: FETCH_ONTOLOGY, payload: result });
        });
    })
    .catch((error) => {
      console.log(error);
    });
  });
}
