import React from 'react'
import style from './Input.module.css'

export default function Input({children, setCurrentMusic, currentMusic, ...props}) {
  return (
    <input onChange={e => setCurrentMusic(e.target.value)} value={currentMusic} className={style.Input} {...props} placeholder="Search 3 tracks..."></input>
  )
}
