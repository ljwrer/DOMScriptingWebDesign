require.config({
	baseUrl:"../js",
	paths:{
		"support":"support"
	}
});
require(["support"],function(support){
	alert(support.inputSupportsType("email"));
	alert(support.elementSupportAttribute("input","placeholder"))
})