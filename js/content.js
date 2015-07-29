define([],function(){
	function addAbbr(abbr,abbrDl){
		var titleText=abbr.getAttribute("title");
		var abbrText=abbr.innerHTML;
		var dt=document.createElement("dt");
		var dd=document.createElement("dd");
		dt.innerHTML=abbrText;
		dd.innerHTML=titleText;
		abbrDl.appendChild(dt);
		abbrDl.appendChild(dd);
	}
	function displayCitations(quote){
		if(!quote.getAttribute("cite")) return;
		if(quote.children.length<1) return
		var cite=quote.getAttribute("cite");
		var linkText="source";
		var link=document.createElement("a");
		link.href=cite;
		link.innerHTML=linkText;
		var sup=document.createElement("sup");
		sup.appendChild(link);
		var p=quote.children[quote.children.length-1];
		p.appendChild(sup);
	}
	function displayAccessKey(accessLink,ul){
		var li=document.createElement("li");
	 	var access=accessLink.getAttribute("accesskey");
	 	var des=accessLink.innerHTML;
	 	li.innerHTML=access+" "+des;
	 	ul.appendChild(li);
	}
	return {
		addAbbr:addAbbr,
		displayCitations:displayCitations,
		displayAccessKey:displayAccessKey
	}
})