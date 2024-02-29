import React from 'react'
import image from "../../assets/forward-button.png"
import style from "./Forward.module.css"

export default function Forward() {
  return (
    <div>
        <img className={style.Forward} 
            src={image} alt=''
        />
    </div>
  )
}
