import React from 'react'
import style from './style.module.css'

export default function ParamBtn({name, cannonName,setCannonName}) {
  const clickHandler = () => {
    setCannonName(name)
    console.log(cannonName)

}
  return (
    <div onClick={clickHandler} className={style.btn}>
    <span>{name}</span>
</div>
  )
}
