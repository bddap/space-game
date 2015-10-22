loadWorld("world.json");

camera.position.z = 51; var inc = 0;

render(function(){
  if(camera.position.z<8){inc=-0.1}else if(camera.position.z>50){inc=0.1}
  camera.position.z -= inc;
});
