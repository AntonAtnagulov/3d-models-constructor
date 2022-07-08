import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import loaderStl from './Scripts/loader';
import initCamera from './Scripts/camera';
import initLight from './Scripts/light';

export default function Canvas() {
    const cannonName = useSelector(store => store.cannonName)
    const mountRef = useRef(null);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#3b3b3b');
    const camera = new initCamera()
    initLight(scene)

    useEffect(() => {
        const towerWithWeapon = loaderStl(scene, cannonName)
        scene.add(towerWithWeapon)

        const zAxis = new THREE.Vector3( 0, 0, 1 );
        const qInitial = new THREE.Quaternion().setFromAxisAngle( zAxis, 0 );
        const qFinal = new THREE.Quaternion().setFromAxisAngle( zAxis, -1 );
        const quaternionKF = new THREE.QuaternionKeyframeTrack( '.quaternion', [ 0, 5, 10 ], [ qInitial.x, qInitial.y, qInitial.z, qInitial.w, qFinal.x, qFinal.y, qFinal.z, qFinal.w, qInitial.x, qInitial.y, qInitial.z, qInitial.w ] );
        const clip = new THREE.AnimationClip( 'Action', 20, [quaternionKF] );
        const mixer = new THREE.AnimationMixer( towerWithWeapon )
        const clipAction = mixer.clipAction( clip );
        clipAction.play();

        let animateId;
        const animate = function () {
            animateId = requestAnimationFrame(animate);
            render();
        };

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // const controls = new OrbitControls(camera, renderer.domElement);
       
        let clock = new THREE.Clock();

        function render() {
            if (camera) {
                renderer.render(scene, camera);
            }
            const delta = clock.getDelta();
            if ( mixer ) {
                mixer.update( delta );
            }
        }

        animate();

        window.addEventListener( 'resize', onWindowResize, false );

        function onWindowResize(){
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }

        return () => {
            cancelAnimationFrame(animateId);
            renderer.dispose();
            scene.clear();
            document.body.removeChild(renderer.domElement);
        };
    }, [cannonName]);

    return <div ref={mountRef} />;
}
