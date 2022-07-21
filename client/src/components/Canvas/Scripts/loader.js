import * as THREE from 'three';
import { Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import loadOne from './loadOne'

export default function loaderStl(scene, cannonName, spans) {
    const tower = new THREE.Group();
    const body = new THREE.Group();
    const spansWeapon = new THREE.Group();

    const gltfLoader = new GLTFLoader();

    const bodyVec3 = new Vector3(17.5, -11.5, 0);
    const bolterVec3 = new Vector3(-8, 0, -17);
    const spansVec3 = new Vector3(-8, 0, -16);
    const spansBolterVec3 = new Vector3(21, -42, 4);
    const battleCannonVec3 = new Vector3(-6, 0, -17);
    const punisherVec3 = new Vector3(0.5, 0, -17);
    const demolisherVec3 = new Vector3(-1, -0.6, -17);
    const annihilatorVec3 = new Vector3(-1, 0, -17);
    const executionerVec3 = new Vector3(0, -0.5, -17);
    const marsBattleCannonVec3 = new Vector3(2, 0.5, 3);
    const marsDemolisherVec3 = new Vector3(2, 0.5, 3);
    const marsIncineratorVec3 = new Vector3(2, 0.5, 3);

    loadOne('./LRussBodyGLTF/LRussBodySPP.gltf', gltfLoader, body, bodyVec3);
    loadOne('./hullBolterGLTF4/hullBolter.glb', gltfLoader, body, bolterVec3);

    switch (spans) {
        case 'with spanson':
            loadOne('./spansonGLTF/Untitled.glb', gltfLoader, body, spansVec3);
            loadOne('./spansBolter/Untitled.glb', gltfLoader, body, spansBolterVec3);
            break;
        default:
            break;
    }

    switch (cannonName) {
        case 'Battle-cannon':
            loadOne('./LRussTowerBattleCannonGLTF/towerBattleCannonSPP.glb', gltfLoader, tower, battleCannonVec3);
            break;
        case 'Punisher':
            loadOne('./LRussTowePunisherGLTF/towerPunisherSPP.glb', gltfLoader, tower, punisherVec3);
            break;
        case 'Demolisher':
            loadOne('./LRussTowerDemolisherGLTF/towerDemolisherSPP.glb', gltfLoader, tower, demolisherVec3);
            break;
        case 'Annihilator':
            loadOne('./annihilatorGLTF/Untitled.gltf', gltfLoader, tower, annihilatorVec3);
            break;
        case 'Executioner':
            loadOne('./LRussTowerExecutionerGLTF/towerExecutionerSPP.glb', gltfLoader, tower, executionerVec3);
            const lightR = new THREE.PointLight(0x008aca, 2);
            lightR.position.set(35, 0, 50);
            tower.add(lightR);
            break;
        case 'Mars battle-cannon':
            loadOne('./marsBattleCannonGLTF/marsBattleCannon.gltf', gltfLoader, tower, marsBattleCannonVec3);
            break;
        case 'Mars demolisher':
            loadOne('./marsDemolisher/marsDemolisher.gltf', gltfLoader, tower, marsDemolisherVec3);
            break;
        case 'Incinerator':
            loadOne('./marsExecutionerGLTF/marsExecutioner.gltf', gltfLoader, tower, marsIncineratorVec3);
            const lightR2 = new THREE.PointLight(0x008aca, 2);
            lightR2.position.set(35, 0, 40);
            tower.add(lightR2);
            break;
        default:
            break;
    }

    return { tower, body, spansWeapon };
}
