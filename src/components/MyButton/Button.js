import React from 'react'
import style from './Button.module.css'

export default function Button({children , ...props}) {
  return (
    <div className={style.Button} {...props}>{children}</div>
  )
}