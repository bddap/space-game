//world.js is ignored
/*
//world is a list of entities
world = []

function attach(ent,block){
  var mesh = new THREE.Mesh( cube, materials[block.type] );
  mesh.position.set(
    block.loc[0]-ent.center_of_mass[0],
    block.loc[1]-ent.center_of_mass[1],
    block.loc[2]-ent.center_of_mass[2]
  );
  base["model"].add( mesh );
}

function update_center_of_mass(ent){
  ent.center_of_mass = [0,0,0];
  entity.structure.forEach(function(block){
    block.loc.forEach(function(_,i){
      ent.center_of_mass[i] += block.loc[i];
    });
  });
  ent.center_of_mass.forEach(function(c){c = c / entity.structure.length});
}

function spawn(entity){
  update_center_of_mass(ent);
  console.log(entity);
  var base = new THREE.Mesh(emptyGeometry);
  entity["model"] = base;
  entity.structure.forEach(function(block){
    attach(block["type"],entity,block["loc"])
  });
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
*/
