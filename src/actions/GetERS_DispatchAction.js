import axios from 'axios';

export function getERS_DispatchDetails(){
    console.log('MADE IT IN getERSDISP')
    return function (dispatch) {
      axios.get('https://serene-basin-27195.herokuapp.com/api?code=1')
      .then( (response) => {
        dispatch({type: 'SET_CURRENT_DISPATCH', payload: response.data})
      })
      .catch( (err) => {
        dispatch({type: 'SET_CURRENT_DISPATCH_FAILED', payload: err})
      })
    }
}
