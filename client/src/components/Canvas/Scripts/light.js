import * as THREE from 'three';

const initLight = (scene) => {
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
};

export default initLight;
