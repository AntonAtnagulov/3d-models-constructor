import * as THREE from 'three';

export default function initCamera() {
    let ratio;
    let posX;
    let posY;
    let posZ;

    if (window.innerWidth < 500) {
        ratio = 5.5;
        posX = 20;
        posY = 30;
        posZ = -20;
    } else {
        ratio = 13;
        posX = 70;
        posY = 20;
        posZ = 10;
    }

    const camera = new THREE.OrthographicCamera(
        window.innerWidth / -ratio,
        window.innerWidth / ratio,
        window.innerHeight / ratio,
        window.innerHeight / -ratio,
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
    camera.position.y = initialCameraPositionY + posX;
    camera.position.x = initialCameraPositionX - posY;
    camera.position.z = distance + posZ;

    return camera;
}
