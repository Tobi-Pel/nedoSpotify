import React from 'react'
import style from "./Wrap.module.css"

export default function Wrap({children}) {
  return (
    <div className={style.Wrap}>{children}</div>
  )
}
