require.config({
	baseUrl:"../js",
	paths:{
		"animation":"animation"
	}
});
require(["animation"],function(animation){
	var linklist=document.getElementById("linklist");
	var links=[];
	Array.prototype.forEach.call(linklist.children,function(item){
		if(item.children[0].nodeName==="A")
		{
			links.push(item.children[0]);
		}
	});
	var topics=document.getElementById("slideshow").firstElementChild;
	animation.positionElement(topics,0,0);
	links.forEach(function(item,index){
		item.onmouseover=function(){
			animation.moveElement(topics,(index+1)*(-100),0,10);
		}
	})
})