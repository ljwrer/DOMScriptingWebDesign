require.config({
	baseUrl:"../js",
	paths:{
		"base":"base"
	}
});
require(["base"],function(base){
	var lib=document.getElementsByClassName("m-imgLib")[0];
	var nameList=lib.getElementsByTagName("ul")[0];
	var img=lib.getElementsByTagName("img")[0];
	var h1=document.getElementsByTagName("h1")[0];
	nameList.onclick=function(event){
		event=event||window.event;
		event.preventDefault();
		var target=event.target||event.srcElement;
		if(target.getAttribute("href"))
		{
			var href=target.getAttribute("href");
			img.setAttribute("src",href);
			h1.innerHTML=target.innerHTML;
		}
	}
});
