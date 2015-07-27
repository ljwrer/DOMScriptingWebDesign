require.config({
	baseUrl:"../js",
	paths:{
		"getElementsByClassName-1.0.1":"getElementsByClassName-1.0.1",
		"test":"test"
	}
});
require(["test","getElementsByClassName-1.0.1"],function(test,getElementsByClassName){
	var lib=document.getElementsByClassName("m-imgLib")[0];
	var nameList=lib.getElementsByTagName("ul")[0];
	var img=lib.getElementsByTagName("img")[0];
	nameList.onclick=function(event){
		event=event||window.event;
		var target=event.target||event.srcElement;
		if(target.constructor.toString().indexOf("Button")!==-1)
		{
			var srcHead="../img/";
			var srcFoot=target.innerHTML+".jpg";
			var src=srcHead+srcFoot;
			img.setAttribute("src",src);
		}
	}
});
