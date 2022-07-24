import React from 'react';
import style from './style.module.css';
import { useSelector } from 'react-redux';
import Table from './Table';

export default function InfoBox() {
    const hoverTarget = useSelector((state) => state.hoverTarget);

    return (
        <>
            {hoverTarget.name && (
                <div className={style.infoBox}>
                    <p className={style.head}>{hoverTarget.name}</p>
                    <table className="table">
                        <tr>
                            <th>range</th>
                            <th>type</th>
                            <th>s</th>
                            <th>ap</th>
                            <th>d</th>
                            <th>abilities</th>
                        </tr>
                        <Table stat={hoverTarget} />
                        {hoverTarget.name === 'Executioner' && (
                            <Table stat={hoverTarget.charged} />
                        )}
                    </table>
                    <div className={style.info}>{hoverTarget.info}</div>
                </div>
            )}
        </>
    );
}
