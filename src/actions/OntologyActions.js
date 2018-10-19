import axios from 'axios';
import { LOCAL_URL, REMOTE_URL } from '../consts';
var parseString = require('xml2js').parseString;

export const FETCH_ONTOLOGY = 'FETCH_ONTOLOGY';
export const GET_METADATA = 'GET_METADATA';

export function fetchOntology() {
  return ((dispatch) => {
    axios.get(LOCAL_URL)
      .then((res) => {
        parseString(res.data, function (err, result) {
          dispatch({ type: FETCH_ONTOLOGY, payload: result });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

export function fetchMetadata(id) {
  return ((dispatch, getState) => {
    dispatch({ type: GET_METADATA, payload: id });
  });
}
