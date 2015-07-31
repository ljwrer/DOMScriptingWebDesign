require.config({
	baseUrl:"../js",
	paths:{
		"cssDom":"cssDom"	
	}
});
require(["cssDom"],function(cssDom){
	var ul=document.getElementById("test");
	cssDom.stripe(ul,"backgroundColor","yellow");
	
})