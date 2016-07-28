var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    100, window.innerWidth / window.innerHeight, 0.1, 1000);
window.addEventListener('resize', onWindowResize, false);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor( 0x03A9F4, 1 );

render();

function render() {
    camera.position.z = 1;
    renderer.render(scene, camera);
}

function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}