import * as actionTypes from './actionTypes';

export const NewHindiPlaylist = (newHindiPlaylist) =>  dispatch => {

dispatch({type: actionTypes.SET_NEWMUSIC_HINDI_ALLPLAYLIST, allPlaylist: newHindiPlaylist})
}

export const BestofArmaanMalikPlaylist = (newBestofArmaanMalik) => dispatch => {
    dispatch({type: actionTypes.SET_BEST_0F_ARMAAN_MALIK, bestOfArmaanMalik: newBestofArmaanMalik })
}

export const BollywoodAlbums = (bollywoodAlbums) => dispatch =>  {
    dispatch({type: actionTypes.BOLLYWOOD_ALBUMS, payload: bollywoodAlbums})
}

export const NewHindiSongs = (newHindiSongs) => dispatch => {
    dispatch({type: actionTypes.NEW_HINDI_SONGS, payload: newHindiSongs});
}