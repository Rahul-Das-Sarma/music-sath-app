import * as actionTypes from  './actionTypes';

  const recievedToken = (_token) => async dispatch => {

dispatch({type: actionTypes.SET_TOKEN, token: _token })

}

export default recievedToken;