require.config({
	baseUrl:"../js",
	paths:{
		"animation":"animation"
	}
});
require(["animation"],function(animation){
	var form=document.forms[0];
	var inputList=form.elements;
	function isFilled(textIn){
		var temp=textIn.value;
		if(!temp.replace(" ","")) return false;
		var placeHolder=textIn.placeholder||textIn.getAttribute("placeholder")
		if(placeHolder)
		{
			if(temp===placeHolder)
			{
				return false;
			}
		}
		return true;
	}
	for(var i=0,len=inputList.length;i<len;i++)
	{
		var placeHolder=inputList[i].placeholder||inputList[i].getAttribute("placeholder")		
		if(placeHolder)
		{
			inputList[i].onfocus=function(event){
				if(!isFilled(this))
				{
					this.value="";
					this.style.color="black";
				}
			}
			inputList[i].onblur=(function(){
				var p=placeHolder
				return function(event){
					if(!isFilled(this))
					{
						this.value=p;
						this.style.color="lightsteelblue";
					}
				}
			})()
			inputList[i].onblur();
		}
		
		
	}
})
