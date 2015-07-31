define([],function(){
	function stripe(ele,prop,value){
		if(ele.children.length<1) return;
		var sign=true;
		Array.prototype.forEach.call(ele.children,function(item){
			if(sign)
			{
				item.style[prop]=value;
				sign=false;
			}
			else
			{
				sign=true;
			}
		})
	}
	return {
		stripe:stripe
	}
})