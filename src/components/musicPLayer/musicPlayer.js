import React, {useState, useEffect} from 'react';
import './musicplayer.css';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Navbar from '../Navbar/navbar';
import Footer from '../footer/footer';


const MusicPlayer = (props) => {
  
 
    
   

   const onShowHandler = () => {
const showPlaylist = document.getElementById("show-playlist");
if(showPlaylist.className === 'playlist-list'){
    showPlaylist.className += ' playlist-show'
}else{
    showPlaylist.className = 'playlist-list'
}
   }



return (
<>
<Navbar />
<div className="music-player-container">
       <div className="music-player-margin">
       <div className="playlist-container">
           
      <span className="menu-icon"><MoreHorizIcon onClick={onShowHandler}  style={{ position: "relative"}} /> </span>  
       <ul id="show-playlist" className="playlist-list" >
           <li><img style={{width: "50px", height: "60px", verticalAlign:"text-top"}}
            src="https://images.unsplash.com/photo-1605020984629-47b27e5459a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
            <span className="song-title">yo</span>
           <span className="song-time-length">3:45</span> </li>

           <li><img style={{width: "50px", height: "60px", verticalAlign:"text-top"}}
            src="https://images.unsplash.com/photo-1605020984629-47b27e5459a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
            <span className="song-title">yo</span>
           <span className="song-time-length">3:45</span> </li>
         
       </ul>
               </div>
       <div className="disk-Player"  >
     
        <img id="disk-player-rotation" className="disk-player-image"  src="https://images.unsplash.com/photo-1605953807536-52eca0c50719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt=""/>
    </div>
    </div>
    <Footer />
    </div>
    </>
)
}

export default MusicPlayer;