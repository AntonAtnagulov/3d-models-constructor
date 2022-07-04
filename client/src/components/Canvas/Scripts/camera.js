import * as THREE from 'three';

export default function initCamera() {
    const camera = new THREE.OrthographicCamera(
        window.innerWidth / -10,
        window.innerWidth / 10,
        window.innerHeight / 10,
        window.innerHeight / -10,
        0.1,
        10000
    );

    camera.rotation.x = (74 * Math.PI) / 180;
    camera.rotation.y = (40 * Math.PI) / 180;
    camera.rotation.z = (10 * Math.PI) / 180;

    const distance = 500;
    const initialCameraPositionY = -Math.tan(camera.rotation.x) * distance;
    const initialCameraPositionX =
        Math.tan(camera.rotation.y) *
        Math.sqrt(distance ** 2 + initialCameraPositionY ** 2);
    camera.position.y = initialCameraPositionY + 70;
    camera.position.x = initialCameraPositionX;
    camera.position.z = distance - 40;

    return camera
}