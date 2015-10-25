
var emptyGeometry = THREE.Geometry();
//var emptyMesh = new THREE.MeshBasicMaterial();
var cube = new THREE.BoxGeometry(1,1,1);
var textures = {
  "asteroid":THREE.ImageUtils.loadTexture('resources/vesta.jpg')
}
var materials = {
  "asteroid":new THREE.MeshBasicMaterial( { map: textures["asteroid"] } )
}
