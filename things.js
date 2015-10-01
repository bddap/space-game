
var cube = new THREE.BoxGeometry(1,1,1);
var asteroidTexture = THREE.ImageUtils.loadTexture('resources/vesta.jpg');
var asteroidMaterial = new THREE.MeshBasicMaterial( { map: asteroidTexture } );
function newAsteroid(){
  var mesh = new THREE.Mesh( cube, asteroidMaterial );
  scene.add( mesh );
  return mesh;
}
