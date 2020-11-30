import React, {useState, useEffect} from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PauseIcon from '@material-ui/icons/Pause';

const Footer =() => {
    const [play, setPlay] = useState(true)
    const [percentage, setPercentage] = useState(0)
    useEffect(() => {
        setPercentage(40)
    },[])

    const ClickHandler = () => {
        if(play === true ) {
           setPlay(false)
         }else {
           setPlay(true)
          }
         }

         const Filler = (props) => {
            return <div className="filler" style={{width: `${percentage}%`}} ></div>
        } 

    return(<div className="music-player-btns">
    <div className="progress-bar" >
        <Filler />
    </div>
    <div className="now-playing-info">
        <span style={{float:"left", marginLeft:"20px", paddingBottom:"20px"}}><img style={{width: "50px", height: "60px", verticalAlign:"text-top"}}
        src="https://images.unsplash.com/photo-1605020984629-47b27e5459a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" /> yoyo</span>
    </div>
 <SkipPreviousIcon  /> <button className="btn-play-pause" onClick={() => ClickHandler()}> {play=== true? <span><PlayArrowIcon /></span> : <span><PauseIcon /></span>}  </button>    <SkipNextIcon/>
</div>)


}

export default Footer;