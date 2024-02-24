import React from 'react'
import style from './GenreButton.module.css'

export default function GenreButton({children , ...props}) {
  return (
    <div className={style.GenreButton} {...props}>{children}</div>
  )
}
