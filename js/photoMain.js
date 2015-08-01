require.config();
require([],function(){
	var list=document.querySelector(".g-content .photos ul");
	var img=document.querySelector(".g-content .photos section img");
	list.onclick=function(event){
		event.preventDefault();
		var target=event.target;
		if(target.nodeName==="IMG")
		{
			var src=target.src;
			img.src=src;	
		}
	}
})