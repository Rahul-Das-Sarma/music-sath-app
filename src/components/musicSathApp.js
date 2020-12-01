import React, { useEffect, useState } from 'react';
import MusicPlayer from './musicPLayer/musicPlayer';
import {Route } from 'react-router-dom';
import Login from './Login/login';
import {getAccessToken} from '../spotify';
import Home from './home/home';
import SpotifyWebApi from 'spotify-web-api-js';
import {connect} from 'react-redux';
import recievedToken from '../store/actions/tokenActions';
import { NewHindiPlaylist, BestofArmaanMalikPlaylist, BollywoodAlbums, NewHindiSongs } from '../store/actions/newHindiPlaylist';
import {LoFiBeatsPlaylist, MellowBeatsPlaylist, BeatsForCodingPlaylist, WorkoutPlaylist} from '../store/actions/beatsPlaylists' 
import Navbar from './Navbar/navbar';
import Footer from  './footer/footer';
import PlaylistDetailPage from './PlaylistDetailpage/PlaylistDetailPage'; 
import { SelectedPlaylistDetails } from '../store/actions/selectedplaylistpageActions';


const MusicSathApp = (props) => {


const [token, setToken] = useState("")
const Spotify = new SpotifyWebApi();
 
    useEffect(() => {
        const hash = getAccessToken();
        const _token = hash.access_token

        
if(_token) {
    setToken(_token)
   window.location.hash =""
    
    Spotify.setAccessToken(_token)

    Spotify.getPlaylist('37i9dQZF1DXd8cOUiye1o2').then(playlist =>{ 
       
        props.musicplaylistAll(playlist);
    }).catch(err => console.log(err))

    Spotify.getPlaylist('7KhLfQHyXRmqUbTdkhTL6M').then(data => {
      
        props.bestOfArmaanMalik(data)
    }).catch(err =>console.log(err))

    Spotify.getPlaylist('2nneJRxOLyxeMUW5hYXqJl').then(data => {
        props.bollywoodAlbums(data)
    }).catch(err => console.log(err))

    Spotify.getPlaylist('3wc6e5ZPCjXAxasjkWlcXc').then(data => {
       props.newHindiSongs(data)
    }).catch(err => console.log(err))

    Spotify.getPlaylist('37i9dQZF1DWWQRwui0ExPn').then(data => {
        console.log(data);
        props.lofiBeatsPlaylist(data)
    }).catch(err => console.log(err))
   
    
    Spotify.getPlaylist('37i9dQZF1DX3qCx5yEZkcJ').then(data => {
        console.log(data);
        props.MellowBeatsPlaylist(data)
    }).catch(err => console.log(err))

   
    Spotify.getPlaylist('1qvW13XhfMMZMlzQx362HR').then(data => {
      
        props.BeatsforCodingPlaylist(data)
    }).catch(err => console.log(err))

    
    Spotify.getPlaylist('37i9dQZF1DWUSyphfcc6aL').then(data => {
       
        props.WorkoutBeatsPlaylist(data)
    }).catch(err => console.log(err))
    
    Spotify.getPlaylist(props.onreceivedSelectedID).then(data => {
        console.log(data);
        props.SelectedPlaylist(data)
    })

}

props.tokenDispatch(_token)
 },[props.tokenDispatch,props.onreceivedSelectedID])

    
    return (
        <div>
            {!token? 
             <Route path='/' component= {Login} /> 
            :
            <>
            <Navbar />
            <Route path='/music-player' exact props={Spotify} component= {MusicPlayer} />
            <Route path='/' exact component= {Home} />
            <Route path={`/playlist/:playlistId`} component = {PlaylistDetailPage} />
            <Footer />
             </>
             }
       
         
       </div>
    )
}
const mapStateToProps = (state) => {
    return {
        onreceivedSelectedID: state.musicReducer.selectedPlaylistId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        tokenDispatch: (_token) => dispatch(recievedToken(_token)),
        musicplaylistAll: (playlist) => dispatch(NewHindiPlaylist(playlist)),
        bestOfArmaanMalik: (data) => dispatch(BestofArmaanMalikPlaylist(data)),
        bollywoodAlbums: (data) => dispatch(BollywoodAlbums(data)),
        newHindiSongs: (data) => dispatch(NewHindiSongs(data)),
        lofiBeatsPlaylist: (data) => dispatch(LoFiBeatsPlaylist(data)),
        MellowBeatsPlaylist: (data) => dispatch(MellowBeatsPlaylist(data)),
        BeatsforCodingPlaylist: (data) => dispatch(BeatsForCodingPlaylist(data)),
        WorkoutBeatsPlaylist: (data) => dispatch(WorkoutPlaylist (data)),
        SelectedPlaylist: (data) => dispatch(SelectedPlaylistDetails(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicSathApp); 