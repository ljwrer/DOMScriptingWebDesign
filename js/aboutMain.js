require.config({
	baseUrl:"../js",
	paths:{
		"cssDom":"cssDom"
	}
});
require(["cssDom"],function(cssDom){
	var sections=document.querySelectorAll(".g-content .about section");
	var list=document.querySelector(".g-content .about ul");
	list.onclick=function(event){
		event=event||window.event;
		var target=event.target||event.srcElement;
		if(target.nodeName==="A")
		{
			var index=Array.prototype.indexOf.call(list.children,target.parentNode);
			cssDom.show(sections[index]);
		}
	}
})