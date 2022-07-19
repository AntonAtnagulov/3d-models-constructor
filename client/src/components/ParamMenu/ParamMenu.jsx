import React from 'react';
import ParamBtn from '../Elements/ParamBtn';
import ParamBtnSpans from '../Elements/ParamBtnSpans';
import style from './style.module.css';

export default function ParamMenu() {
    const cannonArr = [
        'Battle-cannon',
        'Punisher',
        'Demolisher',
        'Annihilator',
        'Eradicator',
        'Executioner',
        'Exterminator',
        'Vanquisher',
        'Mars battle-cannon',
        'Mars demolisher',
        'Incinerator',
    ];

    const spansonArr = ['with spanson', 'without spanson']
    
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
            <p>Spanson</p>
            <div className={style.paramBox}>
                {spansonArr.map((el) => {
                    return (
                        <ParamBtnSpans
                            name={el}
                            key={el.toString()}
                        />
                    );
                })}
            </div>
        </div>
    );
}
