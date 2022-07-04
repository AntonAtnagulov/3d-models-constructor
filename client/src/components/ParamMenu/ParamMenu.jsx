import React from 'react'
import ParamBtn from '../Elements/ParamBtn'
import style from './style.module.css'

export default function ParamMenu({cannonName, setCannonName}) {
  return (
    <div className={style.mainBox}>
        <div className={style.paramBox}>
            <ParamBtn name={'battle-cannon'} cannonName={cannonName} setCannonName={setCannonName}/>
            <ParamBtn name={'las-cannon'} cannonName={cannonName} setCannonName={setCannonName}/>
            <ParamBtn name={'demolisher'} cannonName={cannonName} setCannonName={setCannonName}/>
        </div>
        <div className={style.paramBox}>
            <ParamBtn name={'Body-1'}/>
        </div>
        <div className={style.paramBox}>
            <ParamBtn name={'Arms-1'}/>
            <ParamBtn name={'Arms-2'}/>
        </div>
        <div className={style.paramBox}>
            <ParamBtn name={'Legs-1'}/>
        </div>
    </div>
  )
}
