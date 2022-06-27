import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function Canvas({cannonName, setCannonName}) {
    const mountRef = useRef(null);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#141517');

    const camera = new THREE.OrthographicCamera( window.innerWidth/-10, window.innerWidth/10, window.innerHeight / 10, window.innerHeight / -10, 0.1, 10000 );
  
    camera.rotation.x = 74*Math.PI/180;
    camera.rotation.y = 40*Math.PI/180;
    camera.rotation.z = 10*Math.PI/180;
  
    const distance = 500
    const initialCameraPositionY = -Math.tan(camera.rotation.x)*distance;
    const initialCameraPositionX = Math.tan(camera.rotation.y)*Math.sqrt(distance**2 + initialCameraPositionY**2);
    camera.position.y = initialCameraPositionY + 70;
    camera.position.x = initialCameraPositionX ;
    camera.position.z = distance - 40;

    scene.add(camera);
    
    const material = new THREE.MeshPhongMaterial({
        color: '#a6a6a6',
        flatShading: true,
    });

    const light2 = new THREE.PointLight(0xCEEAF0, 0.4);
    const helper2 = new THREE.PointLightHelper(light2, 4)
    light2.position.set(30, 30, 0);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xD8F3F0, 0.4);
    const helper3 = new THREE.PointLightHelper(light3, 4)
    light3.position.set(100, -300, -10);
    light3.castShadow = true
    scene.add(light3);

    const light5 = new THREE.PointLight(0xCEEAF0, 1);
    const helper5 = new THREE.PointLightHelper(light5, 4)
    light5.position.set(70, -60, 30);
    scene.add(light5);

    const light4 = new THREE.AmbientLight(0x222222, 0.3);
    scene.add(light4);

    useEffect(() => {
        const floor = new THREE.BoxGeometry(500, 500, 3)
        const floorMesh = new THREE.Mesh(floor, material)
        floorMesh.position.set(0, 0, -65)
        floorMesh.receiveShadow = true
        floorMesh.castShadow = true
        scene.add(floorMesh)


        let tower
        const loader = new STLLoader()
        loader.load('./LemanRussParts/towerLemanRuss.stl', (geometry) => {
            geometry.center()
            // camera.position.z = geometry.boundingBox.max.z+300
            tower = new THREE.Mesh(geometry, material)
            tower.name = 'tower'
            tower.receiveShadow = true
            tower.castShadow = true
            scene.add(tower)
        })

        loader.load('./LemanRussParts/bodyLemanRuss.stl', (geometry) => {
            geometry.center()
            // camera.position.z = geometry.boundingBox.max.z+300
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.set(-2, 0, -36)
            mesh.receiveShadow = true
            mesh.castShadow = true
            scene.add(mesh)
        })

        let battleCannon;
        if (cannonName === 'battle-cannon') {
            loader.load(`./LemanRussParts/${cannonName}.stl`, (geometry) => {
                geometry.center()
                // camera.position.z = geometry.boundingBox.max.z+300
                battleCannon = new THREE.Mesh(geometry, material)
                battleCannon.name = 'battleCannon'
                battleCannon.position.set(45, 0, -3)
                battleCannon.receiveShadow = true
                battleCannon.castShadow = true
                scene.add(battleCannon)
            })
        }

        if (cannonName === 'las-cannon') {
            loader.load(`./LemanRussParts/${cannonName}.stl`, (geometry) => {
                geometry.center()
                // camera.position.z = geometry.boundingBox.max.z+300
                const mesh = new THREE.Mesh(geometry, material)
                mesh.name = 'battleCannon'
                mesh.rotation.x = -1.57
                mesh.rotation.y = -4.7
                mesh.position.set(45, -1, -2.5)
                mesh.receiveShadow = true
                mesh.castShadow = true
                scene.add(mesh)
            })
        }


        let animateId
        const animate = function () {
            animateId = requestAnimationFrame(animate);
            render()
            };

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // const controls = new OrbitControls(camera, renderer.domElement);

        function render() {
            renderer.render(scene, camera)
        }

        animate()

        return () => {
            cancelAnimationFrame(animateId);
            renderer.dispose();
            scene.clear()
            document.body.removeChild(renderer.domElement);
        };

    }, [cannonName])


    return <div ref={mountRef} />;
}
