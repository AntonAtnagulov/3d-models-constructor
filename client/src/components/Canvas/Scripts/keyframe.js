import * as THREE from 'three';

const keyframes = (model) => {
    const zAxis = new THREE.Vector3( 0, 0, 1 );
    const qInitial = new THREE.Quaternion().setFromAxisAngle( zAxis, 0 );
    const qFinal = new THREE.Quaternion().setFromAxisAngle( zAxis, -1 );
    const quaternionKF = new THREE.QuaternionKeyframeTrack( '.quaternion', [ 0, 5, 10 ], [ qInitial.x, qInitial.y, qInitial.z, qInitial.w, qFinal.x, qFinal.y, qFinal.z, qFinal.w, qInitial.x, qInitial.y, qInitial.z, qInitial.w ] );
    const clip = new THREE.AnimationClip( 'Action', 20, [quaternionKF] );
    const mixer = new THREE.AnimationMixer( model.tower )
    const clipAction = mixer.clipAction( clip );
    clipAction.play();

    // const positionKF = new THREE.VectorKeyframeTrack( '.position', [ 0, 0.12, 0.24 ], [ 0, 0, 0, 0.3, 0, 0, 0, 0.2, 0 ] );
    // const clip2 = new THREE.AnimationClip( 'Action', 0.24, [positionKF] );
    // const mixer2 = new THREE.AnimationMixer( model.body )
    // const clipAction2 = mixer2.clipAction( clip2 );
    // clipAction2.play();

    // const positionTowerKF = new THREE.VectorKeyframeTrack( '.position', [ 0, 0.12, 0.24 ], [ 0, 0, 0, 0.2, 0, 0.05, 0, 0.2, 0 ] );
    // const clip3 = new THREE.AnimationClip( 'Action', 0.24, [positionTowerKF] );
    // const mixer3 = new THREE.AnimationMixer( model.tower )
    // const clipAction3 = mixer3.clipAction( clip3 );
    // clipAction3.play();

    // const zAxis2 = new THREE.Vector3( 0, 0, 1);
    // const qInitial2 = new THREE.Quaternion().setFromAxisAngle( zAxis2, 0 );
    // const qFinal2 = new THREE.Quaternion().setFromAxisAngle( zAxis2, -1 );
    // const spansWeaponKF = new THREE.QuaternionKeyframeTrack( '.quaternion', [ 0, 3, 6 ], [ qInitial2.x, qInitial2.y, qInitial2.z, qInitial2.w, qFinal2.x, qFinal2.y, qFinal2.z, qFinal2.w, qInitial2.x, qInitial2.y, qInitial2.z, qInitial2.w ] );
    // const clip4 = new THREE.AnimationClip( 'Action', 10, [spansWeaponKF] );
    // const mixer4 = new THREE.AnimationMixer( model.spansWeapon )
    // const clipAction4 = mixer4.clipAction( clip4 );
    // clipAction4.play();

    // return {mixer, mixer4}
    return {mixer}
}

export default keyframes