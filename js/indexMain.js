require.config({
	baseUrl:"../js",
	paths:{
		"animation":"animation"
	}
});
require(["animation"],function(animation){
	var navUl=document.querySelector(".g-nav ul");
	var intro=document.querySelector("#intro");
	var view=document.querySelector(".g-content .m-slider .view")
	navUl.addEventListener("mouseover",navHandle,false);
	intro.addEventListener("mouseover",navHandle,false);
	function navHandle(event){
		event=event||window.event;
		var target=event.target||event.srcElement;
		var item=target.dataset.item;
		if(item)
		{
			var finalX=-140*(item-1);
			animation.moveElement(view,finalX,0,10);
		}
	}
})
