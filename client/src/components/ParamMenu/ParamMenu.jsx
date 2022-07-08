import React from 'react';
import ParamBtn from '../Elements/ParamBtn';
import style from './style.module.css';

export default function ParamMenu({ }) {
    const cannonArr = [
        'Battle-cannon',
        'Punisher',
        'Demolisher',
        'Annihilator',
        'Eradicator',
        'Executioner',
        'Exterminator',
        'Vanquisher',
    ];
    const bodyArr = ['standard pattern', 'mars pattern'];
    
    return (
        <div className={style.mainBox}>
            <p>Turret weapons</p>
            <div className={style.paramBox}>
                {cannonArr.map((el) => {
                    return (
                        <ParamBtn
                            name={el}
                            key={el.toString()}
                        />
                    );
                })}
            </div>
            <p>Body</p>
            <div className={style.paramBox}>
                {bodyArr.map((el) => {
                    return (
                        <ParamBtn
                            name={el}
                            key={el.toString()}
                        />
                    );
                })}
            </div>
        </div>
    );
}
