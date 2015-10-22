
var camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );

var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
window.onload = function(){
document.body.appendChild( renderer.domElement );
};

window.addEventListener( 'resize', onWindowResize, false );

hidescrollbars();

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function render(functionToDoEachFrame) {
  function compo(){
	   requestAnimationFrame( compo );
     functionToDoEachFrame();
     renderer.render( scene, camera );
  }
  compo();
}

function hidescrollbars() {
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    //document.body.scroll = "no"; // ie only
}
