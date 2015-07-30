require.config({
	baseUrl:"../js",
	paths:{
		"animation":"animation"
	}
});
require(["animation"],function(animation){
	var ani=document.getElementById("ani");
	animation.positionElement(ani,"100px","100px");
	animation.moveElement(ani,"500px","500px",10);
	var ani2= document.getElementById("ani2");
	animation.positionElement(ani2,"900px","900px");
	animation.moveElement(ani2,"600px","500px",10);
})