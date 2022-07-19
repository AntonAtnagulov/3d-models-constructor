import * as THREE from 'three';
import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import loaderStl from './Scripts/loader';
import initCamera from './Scripts/camera';
import initLight from './Scripts/light';
import keyframes from './Scripts/keyframe';

import ParamMenu from '../ParamMenu/ParamMenu';
import InfoBox from '../Elements/InfoBox';

export default function Canvas() {
    const mountRef = useRef(null);
    const cannonName = useSelector((store) => store.cannonName);
    const spans = useSelector((store) => store.spans);
    const infoBox = useSelector((store) => store.infoBox);

    const scene = new THREE.Scene();
    const camera = new initCamera();
    initLight(scene);

    useEffect(() => {
        const model = loaderStl(scene, cannonName, spans);
        scene.add(model.body, model.tower, model.spansWeapon);
        model.spansWeapon.name = 'spansWeapon';

        const mixers = keyframes(model);

        let animateId;
        const animate = function () {
            animateId = requestAnimationFrame(animate);
            render();
        };

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });

        renderer.autoClear = true;
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current?.appendChild(renderer.domElement);

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

        window.addEventListener('resize', onWindowResize, false);

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        return () => {
            cancelAnimationFrame(animateId);
            scene.traverse((obj) => {
                if (obj.isMesh) {
                    obj.geometry.dispose();
                    obj.material.dispose();
                    scene.remove(obj);
                    console.log(renderer.info);
                }
            });
            scene.clear();
            renderer.dispose();
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
