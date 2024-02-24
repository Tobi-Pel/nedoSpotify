import React from 'react'
import styles from './InputMusic.module.css'

export default function InputMusic({children, setCurrentMusic, currentMusic, ...props}) {
    return (
      <input onChange={e => setCurrentMusic(e.target.value)} value={currentMusic} className={styles.InputMusic} {...props} placeholder='Search music'></input>
    )
  }
