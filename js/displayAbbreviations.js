require.config({
	baseUrl:"../js",
	paths:{
		"base":"base"
	}
});
require(["base"],function(base){
	var abbrs=document.getElementsByTagName("abbr");
	if(abbrs.length<1) return false;
	abbrs=Array.prototype.slice.call(abbrs);
	var dlContainer=document.createElement("div");
	var header=document.createElement("h2");
	header.innerHTML="Abbreviations";
	var abbrDl=document.createElement("dl");
	dlContainer.appendChild(header);
	dlContainer.appendChild(abbrDl);
	document.body.appendChild(dlContainer);
	function addAbbr(abbr){
		var titleText=abbr.getAttribute("title");
		var abbrText=abbr.innerHTML;
		var dt=document.createElement("dt");
		var dd=document.createElement("dd");
		dt.innerHTML=abbrText;
		dd.innerHTML=titleText;
		abbrDl.appendChild(dt);
		abbrDl.appendChild(dd);
	}
	abbrs.forEach(function(item){
		addAbbr(item);
	})
})