loadWorld("world.json");

camera.position.z = 16

render(function(){
  //camera.position.z = 32 + 8 * Math.sin(Date.now() / 8000)
  tickWorld();
});
