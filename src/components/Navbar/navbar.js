import React from 'react';
import './navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';

const Navbar  = () => {

    const ShowSearchInput = () => {
      const addClass = document.getElementById("search-bar");
  if(addClass.className === "search-input") {
      addClass.className += " search-input-show"
  } else {
     addClass.className = "search-input"
  }
    }
    return(
        <nav>
       <div className="nav-container">
        <div className="top-right-nav">
         <h1 className="music-logo">MusicSath</h1>
                 </div>
         <div className="top-mid-nav">
         <ul>
    <Link style={{textDecoration:"none"}} to='/'><li className="li-overlapping home" >Home</li></Link> 
     
             <li > <input id="search-bar" className="search-input" type="text" placeholder="search for songs..."></input><span className="search-text" style={{marginLeft: "10px", cursor: "pointer"}}><SearchIcon onClick={ShowSearchInput} style={{verticalAlign:"middle"}} /></span>   </li>
         </ul>            
        </div>
          <div className="top-left-nav" style={{marginRight:"20px"}}>
 
          </div>

          </div>
    </nav>
    )
}

export default Navbar;