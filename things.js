
var world = [];
var emptyGeometry = THREE.Geometry();
//var emptyMesh = new THREE.MeshBasicMaterial();
var cube = new THREE.BoxGeometry(1,1,1);
var textures = {
  "asteroid":THREE.ImageUtils.loadTexture('resources/vesta.jpg')
}
var materials = {
  "asteroid":new THREE.MeshBasicMaterial( { map: textures["asteroid"] } )
}

function attach(type,base,loc){
  var mesh = new THREE.Mesh( cube, materials[type] );
  mesh.position.set( loc[0], loc[1], loc[2] );
  base["model"].add( mesh );
}

function spawn(entity){
  var base = new THREE.Mesh(emptyGeometry);
  entity["model"] = base;
  entity["structure"].forEach(function(block){
    attach(block["type"],entity,block["loc"])
  });
  console.log(entity["pos"]);
  base.position.set(entity["pos"][0],entity["pos"][1],entity["pos"][2]);
  scene.add(base);
  world.push(entity);
}

function spawnworld(data){
  data.forEach(function(entity){ spawn(entity) });
}

function loadWorld(url){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          spawnworld(JSON.parse(xmlhttp.responseText));
      }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
