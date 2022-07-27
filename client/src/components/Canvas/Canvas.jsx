import * as THREE from 'three';
import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import loaderStl from './Scripts/loader';
import initCamera from './Scripts/camera';
import initLight from './Scripts/light';
import keyframes from './Scripts/keyframe';
import clearScene from './Scripts/clearScene';

import ParamMenu from '../ParamMenu/ParamMenu';
import InfoBox from '../Elements/InfoBox';

export default function Canvas() {
    const mountRef = useRef(null);
    const cannonName = useSelector((store) => store.cannonName);
    const spans = useSelector((store) => store.spans);
    const infoBox = useSelector((store) => store.infoBox);
    const dispatch = useDispatch();

    const scene = new THREE.Scene();
    const camera = new initCamera();
    initLight(scene);

    useEffect(() => {
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.autoClear = true;
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        const model = loaderStl(scene, cannonName, spans, mountRef, renderer, () => dispatch({type: 'SET_LOADING', payload: false}));
        scene.add(model.body, model.tower, model.spansWeapon);

        const mixers = keyframes(model);

        let animateId;
        const animate = function () {
            animateId = requestAnimationFrame(animate);

            render();
        };

        // const controls = new OrbitControls(camera, renderer.domElement);

        let clock = new THREE.Clock();

        function render() {
            if (camera) {
                renderer.render(scene, camera);
            }
            const delta = clock.getDelta();
            if (mixers.mixer) {
                mixers.mixer.update(delta);
            } 
        }

        animate();
        
        window.addEventListener('resize', onWindowResize, onWindowResize);
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.updateProjectionMatrix();
        }

        return () => {
            clearScene(scene, renderer, animateId, () => dispatch({type: 'SET_LOADING', payload: true}))
            mountRef?.current?.removeChild(renderer.domElement);
        };
    }, [cannonName, spans]);

    return (
        <div ref={mountRef}>
            <ParamMenu />
            {infoBox && <InfoBox />}
        </div>
    );
}
