import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function loaderStl(scene, cannonName) {
    const floorMaterial = new THREE.MeshPhongMaterial({
        color: '#3b3b3b',
        flatShading: false,
    });

    const floor = new THREE.BoxGeometry(500, 500, 3);
    const floorMesh = new THREE.Mesh(floor, floorMaterial);
    floorMesh.position.set(0, 0, -65);
    floorMesh.receiveShadow = true;
    floorMesh.castShadow = true;
    scene.add(floorMesh);

    const towerWithWeapon = new THREE.Group()

    const gltfLoader = new GLTFLoader()

    gltfLoader.load('./LRussBodyGLTF/LRussBodySPP.gltf', (gltf) => {
        gltf.scene.scale.set(0.01, 0.01, 0.01)
        gltf.scene.rotation.x = 1.55
        gltf.scene.position.set(13, -12, -46)
        gltf.scene.castShadow = true
        gltf.scene.receiveShadow = true
        scene.add(gltf.scene);
        }
    );


    if (cannonName === 'Battle-cannon') {
        gltfLoader.load('./LRussTowerBattleCannonGLTF/towerBattleCannonSPP.glb', (gltf) => {
            gltf.scene.scale.set(0.01, 0.01, 0.01)
            gltf.scene.rotation.x = 1.55
            gltf.scene.position.set(25, -5, -62)
            gltf.scene.translateX(-30.5)
            gltf.scene.castShadow = true
            gltf.scene.receiveShadow = true
            towerWithWeapon.add(gltf.scene);
            });
    };

    if (cannonName === 'Punisher') {
        gltfLoader.load('./LRussTowePunisherGLTF/towerPunisherSPP.glb', (gltf) => {
            gltf.scene.scale.set(0.01, 0.01, 0.01)
            gltf.scene.rotation.x = 1.55
            gltf.scene.position.set(29, -4, -62)
            gltf.scene.translateX(-30.5)
            gltf.scene.castShadow = true
            gltf.scene.receiveShadow = true
            towerWithWeapon.add(gltf.scene);
            });
    }

    if (cannonName === 'Demolisher') {
        gltfLoader.load('./LRussTowerDemolisherGLTF/towerDemolisherSPP.glb', (gltf) => {
            gltf.scene.scale.set(0.01, 0.01, 0.01)
            gltf.scene.rotation.x = 1.55
            gltf.scene.position.set(29, -4, -62)
            gltf.scene.translateX(-30.5)
            gltf.scene.castShadow = true
            gltf.scene.receiveShadow = true
            towerWithWeapon.add(gltf.scene);
            });
    }

    return towerWithWeapon
}