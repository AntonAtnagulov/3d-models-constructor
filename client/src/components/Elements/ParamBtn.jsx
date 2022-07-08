import React from 'react';
import style from './style.module.css';
import {useDispatch} from 'react-redux';
import getStats from '../stats';


export default function ParamBtn({ name }) {
    const dispatch = useDispatch()

    const clickHandler = () => {
        dispatch({type: 'SET_CANNON_NAME', payload: name})
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
                src="./testCardPrev.png"
                width="200px"
                height="200px"
                alt={name}
            ></img>
        </div>
    );
}
