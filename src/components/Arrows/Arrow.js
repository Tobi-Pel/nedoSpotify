import React from 'react'
import image from "../../assets/right-and-left.png"
import style from "./Arrow.module.css"

export default function Arrow() {
  return (
    <div>
        <img className={style.Arrow}
            src={image} alt=''
        />
    </div>
  )
}
