import React from 'react'
import style from "./Name.module.css"

export default function Name({children, ...props}) {
  return (
    <div className={style.name} {...props}>{children}</div>
  )
}
