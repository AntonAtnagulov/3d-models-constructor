import React from 'react';
import { useSelector } from 'react-redux';
import ScaleLoader from 'react-spinners/ScaleLoader';

export default function Spinner({width}) {
    const { loading } = useSelector((store) => store);

    const desktop = { position: 'absolute', top: '400px', left: '38%' }
    const mobile = { position: 'absolute', top: '40%', left: '45%' }

    return (
        <ScaleLoader
            style={width < 600 ? mobile : desktop}
            height={50}
            width={5}
            color="#ffffff"
            size={150}
            loading={loading}
        />
    );
}
