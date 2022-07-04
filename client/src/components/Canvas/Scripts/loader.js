import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function loaderStl(scene, material, cannonName, tower) {
    const floorMaterial = new THREE.MeshPhongMaterial({
        color: '#1E1105',
        flatShading: false,
    });

    const floor = new THREE.BoxGeometry(500, 500, 3);
    const floorMesh = new THREE.Mesh(floor, floorMaterial);
    floorMesh.position.set(0, 0, -65);
    floorMesh.receiveShadow = true;
    floorMesh.castShadow = true;
    scene.add(floorMesh);

    const towerWithWeapon = new THREE.Group()

    const loader = new STLLoader()
    const gltfLoader = new GLTFLoader()

    // loader.load('./LemanRussParts/towerLemanRuss.stl', (geometry) => {
    //     geometry.center()
    //     // camera.position.z = geometry.boundingBox.max.z+300
    //     tower = new THREE.Mesh(geometry, material)
    //     geometry.translate( -9, 0, 0 )
    //     tower.name = 'tower'
    //     tower.receiveShadow = true
    //     tower.castShadow = true
    //     tower.position.set(9, 0, 0)
    //     towerWithWeapon.add(tower)
    // })

    gltfLoader.load('./LRussBodyGLTF/LRussBodySPP.gltf', (gltf) => {
        gltf.scene.scale.set(0.01, 0.01, 0.01)
        gltf.scene.rotation.x = 1.55
        gltf.scene.position.set(13, -12, -46)
        gltf.scene.castShadow = true
        gltf.scene.receiveShadow = true
        scene.add(gltf.scene);
        }
    );


    if (cannonName === 'battle-cannon') {
        gltfLoader.load('./LRussTowerBattleCannonGLTF/towerBattleCannonSPP.glb', (gltf) => {
            gltf.scene.scale.set(0.01, 0.01, 0.01)
            gltf.scene.rotation.x = 1.55
            gltf.scene.position.set(25, -5, -62)
            gltf.scene.translateX(-30.5)
            gltf.scene.castShadow = true
            gltf.scene.receiveShadow = true
            // console.log(gltf.scene.children[0].children[0].children[0].geometry)
            // gltf.scene.translate( -9, 0, 0 )
            towerWithWeapon.add(gltf.scene);
            });
            // towerWithWeapon.translateX(10)
            
        // loader.load(`./LemanRussParts/${cannonName}.stl`, (geometry) => {
        //     geometry.center()
        //     geometry.translate( -9, 0, 0 )
        //     // camera.position.z = geometry.boundingBox.max.z+300
        //     const battleCannon = new THREE.Mesh(geometry, material)
        //     battleCannon.name = 'battleCannon'
        //     battleCannon.position.set(45, 0, -3)
        //     battleCannon.receiveShadow = true
        //     battleCannon.castShadow = true
        //     towerWithWeapon.add(battleCannon)
        // })
    };

    if (cannonName === 'las-cannon') {
        gltfLoader.load('./LRussTowePunisherGLTF/towerPunisherSPP.glb', (gltf) => {
            gltf.scene.scale.set(0.01, 0.01, 0.01)
            gltf.scene.rotation.x = 1.55
            gltf.scene.position.set(29, -4, -62)
            gltf.scene.translateX(-30.5)
            gltf.scene.castShadow = true
            gltf.scene.receiveShadow = true
            towerWithWeapon.add(gltf.scene);
            });


        // loader.load(`./LemanRussParts/${cannonName}.stl`, (geometry) => {
        //     geometry.center()
        //     console.log(geometry)
        //     // camera.position.z = geometry.boundingBox.max.z+300
        //     const mesh = new THREE.Mesh(geometry, material)
        //     mesh.name = 'las-cannon'
        //     mesh.rotation.x = -1.57
        //     mesh.rotation.y = -4.7
        //     mesh.position.set(45, -1, -2.5)
        //     mesh.receiveShadow = true
        //     mesh.castShadow = true
        //     scene.add(mesh)
        // })
    }

    if (cannonName === 'demolisher') {
        gltfLoader.load('./LRussTowerDemolisherGLTF/towerDemolisherSPP.glb', (gltf) => {
            gltf.scene.scale.set(0.01, 0.01, 0.01)
            gltf.scene.rotation.x = 1.55
            gltf.scene.position.set(29, -4, -62)
            gltf.scene.translateX(-30.5)
            gltf.scene.castShadow = true
            gltf.scene.receiveShadow = true
            towerWithWeapon.add(gltf.scene);
            });


        // loader.load(`./LemanRussParts/${cannonName}.stl`, (geometry) => {
        //     geometry.center()
        //     // camera.position.z = geometry.boundingBox.max.z+300
        //     const mesh = new THREE.Mesh(geometry, material)
        //     mesh.name = 'demolisher'
        //     mesh.rotation.x = -1.57
        //     mesh.rotation.y = -4.7
        //     mesh.position.set(34, -1, -2.5)
        //     mesh.receiveShadow = true
        //     mesh.castShadow = true
        //     scene.add(mesh)
        // })
    }

    return towerWithWeapon
}