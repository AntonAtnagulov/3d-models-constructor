import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import loaderStl from './Scripts/loader';
import initCamera from './Scripts/camera';

export default function Canvas({ cannonName, setCannonName }) {
    const mountRef = useRef(null);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#141517');
    let tower;

    const camera = new initCamera()

    // const material = new THREE.MeshPhongMaterial({
    //     color: '#061810',
    //     flatShading: false,
    //     // smoothShading: true
    // });

    const material = new THREE.MeshMatcapMaterial({color: '#d3d3d3'})


    const light2 = new THREE.PointLight(0xffffff, 1);
    const helper2 = new THREE.PointLightHelper(light2, 4);
    light2.position.set(30, 30, 0);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xffffff, 1);
    const helper3 = new THREE.PointLightHelper(light3, 4);
    light3.position.set(100, -300, -10);
    light3.castShadow = true;
    scene.add(light3);

    const light5 = new THREE.PointLight(0xffffff, 1);
    const helper5 = new THREE.PointLightHelper(light5, 4);
    light5.position.set(70, -60, 30);
    scene.add(light5);

    const light4 = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(light4);

    useEffect(() => {
        const towerWithWeapon = loaderStl(scene, material, cannonName, tower)

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

        return () => {
            cancelAnimationFrame(animateId);
            renderer.dispose();
            scene.clear();
            document.body.removeChild(renderer.domElement);
        };
    }, [cannonName]);

    return <div ref={mountRef} />;
}
