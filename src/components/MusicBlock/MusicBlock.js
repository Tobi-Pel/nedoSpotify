import React from 'react'
import style from "./MusicBlock.module.css"

export default function MusicBlock({children , ...props}) {
  return (
    <div className={style.MusicBlock} {...props}>{children}</div>
  )
}
