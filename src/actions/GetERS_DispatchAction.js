import axios from 'axios';

export function getERS_DispatchDetails(id){
  return function (dispatch) {
    var location = `https://serene-basin-27195.herokuapp.com/api?code=${id}`;
    axios.get(location)
    .then( (response) => {
      dispatch({type: 'SET_CURRENT_DISPATCH', payload: response.data})
    })
    .catch( (err) => {
      dispatch({type: 'SET_CURRENT_DISPATCH_FAILED', payload: err})
    })
  }
}
