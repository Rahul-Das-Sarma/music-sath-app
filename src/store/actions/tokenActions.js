import * as actionTypes from  './actionTypes';

  const recievedToken = (_token) =>  (dispatch,getState) => {

dispatch({type: actionTypes.SET_TOKEN, token: _token })
localStorage.setItem('accessToken', JSON.stringify(getState().musicReducer.token))

}

export default recievedToken;