import React from 'react';

export default function Table({stat}) {
    return (
        <tr>
            <td>{stat.range}</td>
            <td>{stat.type}</td>
            <td>{stat.s}</td>
            <td>{stat.ap}</td>
            <td>{stat.d}</td>
            <td>{stat.abilities}</td>
        </tr>
    );
}
