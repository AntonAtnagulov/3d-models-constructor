import React from 'react';
import style from './style.module.css';
import { useDispatch } from 'react-redux';
import getStats from '../stats';

export default function ParamBtnSpans({ name }) {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch({ type: 'SET_SPANS', payload: name });
    };

    return (
        <div onClick={clickHandler} className={style.btn}>
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
