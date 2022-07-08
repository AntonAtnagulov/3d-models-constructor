import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import loaderStl from './Scripts/loader';
import initCamera from './Scripts/camera';
import initLight from './Scripts/light';
import keyframes from './Scripts/keyframe';

export default function Canvas() {
    const cannonName = useSelector(store => store.cannonName)
    const mountRef = useRef(null);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#3b3b3b');
    const camera = new initCamera()
    initLight(scene)

    useEffect(() => {
        const model = loaderStl(scene, cannonName)
        scene.add(model.tower, model.body)

        const mixers = keyframes(model)
        console.log(mixers)

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
            if ( mixers.mixer ) {
                mixers.mixer.update( delta );
            }
            if (  mixers.mixer2 ) {
                mixers.mixer2.update( delta );
            }
            if (  mixers.mixer3 ) {
                mixers.mixer3.update( delta );
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
            model.body.children[0].children[0].children[0].children[0].geometry.dispose()
            model.tower.children[0].children[0].children[0].children[0].geometry.dispose()
            scene.remove(model.body, model.tower)
            renderer.dispose();
            scene.clear();
            document.body.removeChild(renderer.domElement);
        };
    }, [cannonName]);

    return <div ref={mountRef} />;
}
