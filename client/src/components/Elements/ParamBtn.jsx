import React from 'react'
import style from './style.module.css'

export default function ParamBtn({name, setCannonName}) {
  const clickHandler = () => {
    setCannonName(name)
}
  return (
    <div onClick={clickHandler} className={style.btn}>
    <span>{name}</span>
</div>
  )
}
