import React from 'react';
import style from './style.module.css';
import {useDispatch, useSelector} from 'react-redux';
import getStats from '../stats';


export default function ParamBtn({ name }) {
    const cannonName = useSelector(store => store.cannonName)
    const dispatch = useDispatch()

    const clickHandler = () => {
        dispatch({type: 'SET_CANNON_NAME', payload: name})
        console.log('clickHandler', cannonName)
    };

    const showInfoBoxHandler = (e) => {
        dispatch({type: "SET_INFOBOX", payload: true})
        dispatch({type: "SET_HOVER_TARGET", payload: getStats(e.target.alt)})
    };

    const closeInfoBoxHandler = (e) => {
        dispatch({type: "SET_INFOBOX", payload: false})
        dispatch({type: "SET_HOVER_TARGET", payload: {}})
    };

    return (
        <div
            onClick={clickHandler}
            onMouseEnter={(e) => showInfoBoxHandler(e)}
            onMouseLeave={(e) => closeInfoBoxHandler(e)}
            className={style.btn}
        >
            <img
                className={style.prevImg}
                src={`./prevImg/${name}.png`}
                width="200px"
                height="200px"
                alt={name}
            ></img>
        </div>
    );
}
