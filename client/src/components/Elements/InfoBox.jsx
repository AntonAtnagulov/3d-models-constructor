import React from 'react';
import style from './style.module.css';
import { useSelector } from 'react-redux';

export default function InfoBox() {
    const hoverTarget = useSelector((state) => state.hoverTarget);
    return (
      <>
      {
        hoverTarget.name &&         
        <div className={style.infoBox}>
        <p className={style.head}>{hoverTarget.name}</p>
        <table className='table'>
            <tr>
                <th>range</th>
                <th>type</th>
                <th>s</th>
                <th>ap</th>
                <th>d</th>
                <th>abilities</th>
            </tr>
            <tr>
                <td>{hoverTarget.range}</td>
                <td>{hoverTarget.type}</td>
                <td>{hoverTarget.s}</td>
                <td>{hoverTarget.ap}</td>
                <td>{hoverTarget.d}</td>
                <td>{hoverTarget.abilities}</td>
            </tr>
            {hoverTarget.name === 'executioner' && (
                <tr>
                    <td>{hoverTarget.charged.range}</td>
                    <td>{hoverTarget.charged.type}</td>
                    <td>{hoverTarget.charged.s}</td>
                    <td>{hoverTarget.charged.ap}</td>
                    <td>{hoverTarget.charged.d}</td>
                    <td>{hoverTarget.charged.abilities}</td>
                </tr>
            )}
        </table>
        <div className={style.info}>{hoverTarget.info}</div>
    </div>
      }

        </>
    );
}
