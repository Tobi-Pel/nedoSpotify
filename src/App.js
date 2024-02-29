import React, { useState , useRef } from "react";
import "./global.css"
import Button from "./Components/MyButton/Button";
import Input from "./Components/Input/Input";
import Name from "./Components/NameOfMusic/Name";
import PlayImage from "./Components/PlayImage/PlayImage";
import Arrow from "./Components/Arrows/Arrow";
import RandomImage from "./Components/RandomImage/RandomImage";
import Forward from "./Components/Forward/Forward";
import Forward2 from "./Components/Forward2/Forward2";
import Slider from "./Components/slider/Slider";
import ControlPanel from "./Components/controls/ControlPanel";
import MusicBlock from "./Components/MusicBlock/MusicBlock";

function App() {
  const [music , setMusic] = useState([
    {name: "Apple" , url: require("./audios/apple.mp3")} ,
    {name: "Light" , url: require("./audios/The_Smiths_-_There_Is_A_Light_That_Never_Goes_Out_48159346.mp3")}
  ]);
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

  const [curUrl , setCurUrl] = useState(music[0].url);
  const [curName , setCurName] = useState(music[0].name);

  const ListMusic = music.map((item) => {
    if(item.name.includes(currentMusic) && currentMusic !== ""){
      return <MusicBlock onClick={() => {
        setCurUrl(item.url)
        setCurName(item.name)
      }}>{item.name}</MusicBlock>
    }
  })

  return (
    <div className="App">
      <div className="App-inner">
        <heading>
          <Button>house</Button>
          <Button>dnb</Button>
          <Button>dubstep</Button>
        </heading>
        <Input setCurrentMusic={setCurrentMusic} currentMusic={currentMusic}>{currentMusic}</Input>
        <div className="Music-placeholder">
          <div className="at">
            <Name>{curName}</Name>
            <p className="time">{secondsToHms(currentTime)} / {secondsToHms(duration)}</p>
          </div>
          <Slider percentage={percentage} onChange={onChange} />
          <audio
          ref={audioRef}
          onTimeUpdate={getCurrDuration}
          onLoadedData={(e) => {
            setDuration(e.currentTarget.duration.toFixed(2))
          }}
            src={curUrl}
        ></audio>
        
          <div className="bottom">
            <Arrow/>
            <Forward/>
            <ControlPanel
            play={play}
            isPlaying={isPlaying}
            duration={duration}
            currentTime={currentTime}
        />
            <Forward2/>
            <RandomImage></RandomImage>
          </div>
        </div>

        <div className="list-of-music" >
          {ListMusic}
        </div>
      </div>
    </div>
  );
}

export default App;