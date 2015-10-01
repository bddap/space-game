//TODO apply texture to cube

var ship = [];
for (var i = 0; i < 9; i++) { //Peasantly
  ship.push([]);
  for (var j = 0; j < 9; j++) { //But it is late
    ship[i].push([]);
    for (var k = 0; k < 9; k++) { //So I'll let it go for now
      ship[i][j].push(newAsteroid());
      ship[i][j][k].position.x = i-4;
      ship[i][j][k].position.y = j-4;
      ship[i][j][k].position.z = k-4;
    }
  }
}

camera.position.z = 51; var inc = 0;

render(function(){
  if(camera.position.z<8){inc=-0.1}else if(camera.position.z>50){inc=0.1}
  camera.position.z -= inc;
});
