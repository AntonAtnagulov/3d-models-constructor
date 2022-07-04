        const zAxis = new THREE.Vector3( 0, 0, 1 );
        const qInitial = new THREE.Quaternion().setFromAxisAngle( zAxis, 0 );
        const qFinal = new THREE.Quaternion().setFromAxisAngle( zAxis, Math.PI );
        const quaternionKF = new THREE.QuaternionKeyframeTrack( '.quaternion', [ 0, 1, 2 ], [ qInitial.x, qInitial.y, qInitial.z, qInitial.w, qFinal.x, qFinal.y, qFinal.z, qFinal.w, qInitial.x, qInitial.y, qInitial.z, qInitial.w ] );
        const positionKF = new THREE.VectorKeyframeTrack( '.position', [ 0, 1, 2 ], [ 0, 0, 0, 30, 0, 0, 0, 0, 0 ] );
        const clip = new THREE.AnimationClip( 'Action', 3, [quaternionKF] );
        const mixer = new THREE.AnimationMixer( towerWithWeapon )
        const clipAction = mixer.clipAction( clip );
        clipAction.play();

        let clock = new THREE.Clock();

        function render() {
            if (camera) {
                renderer.render(scene, camera);
            }
            const delta = clock.getDelta();
            if ( mixer ) {
                mixer.update( delta );
            }
        }
