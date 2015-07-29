require.config({
	baseUrl:"../js",
	paths:{
		"base":"base"
	}
});
require(["base"],function(base){
	var parent=document.getElementById("parent");
	var child2=document.getElementById("child2");
	var child1=document.createElement("p");
	child1.innerHTML="1";
//	parent.insertBefore(child1,child2);
//	child2.parentNode.insertBefore(child1,child2);
	base.insertAfter(child1,child2);
})
