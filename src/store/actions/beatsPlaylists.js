import * as actionTypes from './actionTypes';


export const LoFiBeatsPlaylist = (loFiBeats) => dispatch => {
    dispatch({type: actionTypes.LO_FI_BEATS, payload: loFiBeats})
}

export const MellowBeatsPlaylist = (mellowBeatsData) => dispatch => {
 dispatch({type: actionTypes.SET_MELLOW_BEATS, payload: mellowBeatsData})
} 

export const BeatsForCodingPlaylist = (beatsForCodingData) => dispatch => {
    dispatch({type: actionTypes.SET_BEATS_FOR_CODING, payload: beatsForCodingData})
}

export const WorkoutPlaylist = (workoutplaylistData) => dispatch => {
    dispatch({type: actionTypes.SET_BEAT_ROUTES, payload: workoutplaylistData})
}