export default function (scene, renderer, animateId, callback) {
    cancelAnimationFrame(animateId);
    scene.traverse((obj) => {
        if (obj.isMesh) {
            obj.geometry.dispose();
            obj.material.dispose();
            obj.geometry = null;
            obj.material = null;
            scene.remove(obj);
        }
    });
    if (typeof callback === 'function') {
        callback()
    }
    scene.clear();
    renderer.dispose();
}