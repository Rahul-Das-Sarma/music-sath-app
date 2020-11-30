import React from "react";
import NavBar from "../Navbar/navbar";
import { connect } from 'react-redux';
import './home.css';


const Home  = (props) => {
 
 function truncate(str, no_words) {
     return str? str.split(" ").splice(0, no_words) + "...": null
 } 
        return(
            <div>
                <NavBar />
                <div className="home-playlist-container">
                    <h3 style={{margin: "20px"}}>Bollywood</h3>
        <div className="music-playlist-items">

       <div className="music-playlist-card">
       <img className="music-playlist-group" src={props.newHindiMusicPlaylist?.images[0].url} alt="" />
        <p className="music-playlist-description" >{props.newHindiMusicPlaylist?.name}</p>
        </div>  

        <div className="music-playlist-card">
       <img className="music-playlist-group" src={props.bestOfArmaanPlaylist?.images[0].url} alt="" />
        <p className="music-playlist-description" >{props.bestOfArmaanPlaylist?.name}</p>
        </div>  

        
        <div className="music-playlist-card">
       <img className="music-playlist-group" src={props.bollywoodAlbums?.images[0].url} alt="" />
        <p className="music-playlist-description" >{props.bollywoodAlbums?.name}</p>
        </div>  
  
        <div className="music-playlist-card">
       <img className="music-playlist-group" src={props.newHindiSongs?.images[0].url} alt="" />
        <p className="music-playlist-description" >{props.newHindiSongs?.name}</p>
        </div>  
        </div>
        </div>  
    
    <div className="home-playlist-container">
    <h3 style={{margin: "20px"}}>Beats</h3>
    <div className="music-playlist-items">

    <div className="music-playlist-card">
       <img className="music-playlist-group" src={props.lofiBeatsPlaylists?.images[0].url} alt="" />
        <p className="music-playlist-description" >{props.lofiBeatsPlaylists?.name}</p>
        </div>
    
        <div className="music-playlist-card">
       <img className="music-playlist-group" src={props.mellowBeatsPlaylists?.images[0].url} alt="" />
        <p className="music-playlist-description" >{props.mellowBeatsPlaylists?.name}</p>
        </div>

        <div className="music-playlist-card">
       <img className="music-playlist-group" src={props.BeatsforCodingPlaylists?.images[0].url} alt="" />
        <p className="music-playlist-description" >{props.BeatsforCodingPlaylists?.name}</p>
        </div>

        <div className="music-playlist-card">
       <img className="music-playlist-group" src={props.WorkoutPlaylists?.images[0].url} alt="" />
        <p className="music-playlist-description" >{props.WorkoutPlaylists?.name}</p>
        </div>

    </div>
    </div>



 </div>
        )

   
 
}

const mapStateToProps = (state ) => {
    console.log(state.musicReducer.beatsRoutes);
    return {
       newHindiMusicPlaylist: state.musicReducer.newHindiAllPlaylist,
       bestOfArmaanPlaylist: state.musicReducer.bestofArmaanMalik,
       bollywoodAlbums: state.musicReducer.bollywoodAlbums,
       newHindiSongs: state.musicReducer.newHindiSongs,
       lofiBeatsPlaylists: state.musicReducer.LoFIBEATS,
       mellowBeatsPlaylists:  state.musicReducer.MellowBeats,
       BeatsforCodingPlaylists:  state.musicReducer.beatsForCoding,
      WorkoutPlaylists: state.musicReducer.workOutPlaylist
    }
}


export default connect(mapStateToProps, )(Home);