import * as THREE from 'three';

const initLight = (scene) => {
    const light2 = new THREE.PointLight(0xffffff, 1);
    const helper2 = new THREE.PointLightHelper(light2, 4);
    light2.position.set(30, 30, 0);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xffffff, 2);
    const helper3 = new THREE.PointLightHelper(light3, 3);
    light3.position.set(120, -100, 65);
    light3.castShadow = true;
    scene.add(light3);

    light3.shadow.mapSize.width = 1024;
    light3.shadow.mapSize.height = 1024;

    const light5 = new THREE.PointLight(0xffffff, 1);
    const helper5 = new THREE.PointLightHelper(light5, 4);
    light5.position.set(70, -60, 50);
    scene.add(light5);

    const lightRed = new THREE.PointLight(0xEE6507, 1.5);
    const helperRed = new THREE.PointLightHelper(lightRed, 3);
    lightRed.position.set(70, -60, 90);
    scene.add(lightRed);

    const lightRedB = new THREE.PointLight(0xEE6507, 1.5);
    const helperRedB = new THREE.PointLightHelper(lightRedB, 3);
    lightRedB.position.set(50, 60, 90);
    scene.add(lightRedB);

    const light4 = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(light4);
};

export default initLight;
