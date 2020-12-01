import * as actionTypes from './actionTypes';


export const SelectedPlaylistId = (playlistId) => dispatch => {
dispatch({type: actionTypes.SELECTED_PLAYLIST_ID, payload: playlistId})
}

export const SelectedPlaylistDetails = (playlistData) =>  dispatch => {
    dispatch({type: actionTypes.SELECTED_PLAYLIST_PAGE, payload: playlistData})
}