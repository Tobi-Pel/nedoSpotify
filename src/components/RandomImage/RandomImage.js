import React from 'react'
import style from "./RandomImage.module.css"
import image from "../../assets/random.png"

export default function RandomImage() {
  return (
    <div>
        <img className={style.RandomImage}
          src={image} alt=''
        />
    </div>
  )
}
