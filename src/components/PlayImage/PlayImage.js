import React from 'react'
import image from "../../assets/play.png"
import style from "./PlayImage.module.css"

export default function PlayImage() {
  return (
    <div>
        <img className={style.PlayImage}
          src={image} alt=""
        />
    </div>
  )
}
