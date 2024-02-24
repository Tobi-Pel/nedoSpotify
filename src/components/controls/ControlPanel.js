import React from 'react'
import Button from './Button'
import './control-panel.css'

function ControlPanel({ play, isPlaying, duration, currentTime }) {
  return (
    <div className='control-panel'>
      <Button play={play} isPlaying={isPlaying} />
    </div>
  )
}
export default ControlPanel