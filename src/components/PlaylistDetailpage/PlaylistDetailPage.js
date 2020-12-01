import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {SelectedPlaylistId} from '../../store/actions/selectedplaylistpageActions'


const PlaylistDetailPage =(props) => {
    const playlistID = props.match.params.playlistId
    useEffect(() => {
        props.onSelectedID(playlistID)
    },[props.onSelectedID])


    return (
        <h1>Playlist</h1>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSelectedID: (playlistID) => {
            dispatch(SelectedPlaylistId(playlistID))
        }
    }
}
export default connect(null, mapDispatchToProps)(PlaylistDetailPage);