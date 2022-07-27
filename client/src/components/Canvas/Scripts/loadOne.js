const loadOne = (path, loader, group, vector, callback) => {
    loader.load(path, (gltf) => {
        gltf.scene.scale.set(0.01, 0.01, 0.01);
        gltf.scene.rotation.x = Math.PI / 2;
        gltf.scene.position.set(vector.x, vector.y, vector.z);
        group.add(gltf.scene);
        if (typeof callback === 'function') {
            callback()
        }
    });
};

export default loadOne;
