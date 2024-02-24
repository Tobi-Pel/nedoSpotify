import React, { useRef, useState } from "react";
import './global.css'
import GenreButton from "./components/GenreButton/GenreButton";
import InputMusic from "./components/InputMusic/InputMusic";
import Wrap from "./components/Wrap/Wrap";
import Slider from "./components/slider/Slider";
import muzic1 from './audios/apple.mp3'
import ControlPanel from './components/controls/ControlPanel'

function App() {
  const [music , setMusic] = useState([]);
  const [currentMusic , setCurrentMusic] = useState("");

  const [percentage, setPercentage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioRef = useRef()

  const onChange = (e) => {
    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
  }

  const play = () => {
    const audio = audioRef.current
    audio.volume = 0.1

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }

    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

  function secondsToHms(seconds) {
    if (!seconds) return '00:00'

    let duration = seconds
    let hours = duration / 3600
    duration = duration % 3600

    let min = parseInt(duration / 60)
    duration = duration % 60

    let sec = parseInt(duration)

    if (sec < 10) {
      sec = `0${sec}`
    }
    if (min < 10) {
      min = `0${min}`
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}h ${min}:${sec}`
    } else if (min == 0) {
      return `00:${sec}`
    } else {
      return `${min}:${sec}`
    }
  }


  return (
    <div className="App">
      <div style={{display : "flex" , justifyContent : "center" , gap : "10px" , marginTop : "30px"}}>
        <GenreButton>house</GenreButton>
        <GenreButton>dnb</GenreButton>
        <GenreButton>dubstep</GenreButton>
        </div>
        <InputMusic setCurrentMusic={setCurrentMusic} currentMusic={currentMusic}>{currentMusic}</InputMusic>
        <Wrap>
          <div className="collector">
            <div className="white-words">Name of song</div>
            <div className="white-words">{secondsToHms(currentTime)} / {secondsToHms(duration)}</div>
          </div>
          <Slider percentage={percentage} onChange={onChange} />
      <audio
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}
        src={muzic1}
      ></audio>
      <ControlPanel
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
      />
        </Wrap>

     </div>
  );
}

export default App;
