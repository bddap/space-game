var world = [];
var time = Date.now() / 1000;

function modelviewTransform(ent){
  var deltaT = (time - ent.epoch);
  //rotate
  //ent.model.quaternion.setFromAxisAngle(ent.rot.axis,ent.rot.angle);
  ent.model.quaternion.setFromAxisAngle(ent.rot.axis,ent.rot.angle).
  multiply(new THREE.Quaternion().setFromAxisAngle(ent.rotvel.axis, ent.rotvel.angle * deltaT));
  //rotate according to rotational velocity
  //deltaRot.setFromAxisAngle(ent.rotvel.axis,ent.rotvel.angle*deltaT)
  //console.log(ent.rotvel.angle);
  //ent.model.quaternion.multiply(deltaRot);
  //move
  ent.model.position.copy(ent.pos).
  addScaledVector(ent.vel, deltaT);
}

function tickEnt(ent){
  modelviewTransform(ent);
}

function tickWorld(){
  time = Date.now() / 1000;
  world.forEach(tickEnt);
}

function calulate_center_of_mass(ent){
  var com = [0,0,0];
  ent.structure.forEach(function(block){
    block.loc.forEach(function(_,i){
      com[i] += block.loc[i];
    });
  });
  return com.map(function(c){return c / ent.structure.length;});
}

function attach(block,ent){
  var mesh = new THREE.Mesh( cube, materials[block.type] );
  var loc = block.loc
  console.log(ent.com);
  mesh.position.set(
    loc[0]-ent.com[0],
    loc[1]-ent.com[1],
    loc[2]-ent.com[2]
  );
  ent.model.add( mesh );
}

function spawn(entity){
  entity.com = calulate_center_of_mass(entity);
  entity.model = new THREE.Mesh(emptyGeometry);
  entity.structure.forEach(function(block){ attach(block,entity) });

  entity.epoch = time;
  entity.pos = new THREE.Vector3(entity.pos[0],entity.pos[1],entity.pos[2]);
  entity.vel = new THREE.Vector3(entity.vel[0],entity.vel[1],entity.vel[2]);
  entity.rot.axis = new THREE.Vector3(entity.rot.axis[0],entity.rot.axis[1],entity.rot.axis[2]).normalize();
  entity.rotvel.axis = new THREE.Vector3(entity.rotvel.axis[0],entity.rotvel.axis[1],entity.rotvel.axis[2]).normalize();
  //entity.model.matrixAutoUpdate = false;
  //entity.model.__dirtyPosition = true;
  scene.add(entity.model);
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
