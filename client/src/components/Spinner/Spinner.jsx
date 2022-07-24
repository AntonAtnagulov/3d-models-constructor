import React from 'react';
import { useSelector } from 'react-redux';
import ScaleLoader from 'react-spinners/ScaleLoader';

export default function Spinner() {
    const { loading } = useSelector((store) => store);

    return (
        <ScaleLoader
            style={{ position: 'absolute', top: '400px', left: '38%' }}
            height={50}
            width={5}
            color="#ffffff"
            size={150}
            loading={loading}
        />
    );
}
