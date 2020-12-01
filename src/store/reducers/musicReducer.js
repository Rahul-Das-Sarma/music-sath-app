import * as actionTypes from '../actions/actionTypes';

const initialState = {
    
    user: null,
    playlist: [],
    token : null,
    playing : false
}


const MusicReducer = (state = initialState, action) => {
switch(action.type){
    case actionTypes.SET_TOKEN:
        return {
            ...state,
            token: action.token
        }
    
    case actionTypes.SET_NEWMUSIC_HINDI_ALLPLAYLIST:
        return{
            ...state,
         newHindiAllPlaylist: action.allPlaylist
        }
    case actionTypes.SET_BEST_0F_ARMAAN_MALIK:
        return{
              ...state,
           bestofArmaanMalik: action.bestOfArmaanMalik
        }
    case actionTypes.BOLLYWOOD_ALBUMS:
        return {
            ...state,
            bollywoodAlbums: action.payload
        }
    case actionTypes.NEW_HINDI_SONGS:
        return {
            ...state,
            newHindiSongs: action.payload
        }

    case actionTypes.LO_FI_BEATS:
        return {
            ...state,
            LoFIBEATS: action.payload
        }
    case actionTypes.SET_MELLOW_BEATS:
        return {
            ...state,
            MellowBeats:  action.payload
        }
    case actionTypes.SET_BEATS_FOR_CODING:
        return {
            ...state,
            beatsForCoding: action.payload
        }
    case actionTypes.SET_BEAT_ROUTES:
        return {
            ...state,
            workOutPlaylist: action.payload
        }
    case actionTypes.SELECTED_PLAYLIST_ID:
        return {
          ...state,
        selectedPlaylistId: action.payload
        }
    case actionTypes.SELECTED_PLAYLIST_PAGE:
        return {
            ...state,
            selectedPlaylistDetails: action.payload
        }
    default:
        return state
}
}

export default MusicReducer;