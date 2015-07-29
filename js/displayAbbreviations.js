require.config({
	baseUrl:"../js",
	paths:{
		"base":"base",
		"content":"content"
	}
});
require(["content"],function(content){
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
	abbrs.forEach(function(item){
		content.addAbbr(item,abbrDl);
	})
	
})
require(["content"],function(content){
	var quotes	=document.getElementsByTagName("blockquote");
	if(quotes.length<1) return;
	quotes=Array.prototype.slice.call(quotes);
	quotes.forEach(function(item){
	quotes=Array.prototype.slice.call(quotes);
		content.displayCitations(item);
	})
})
require(["base","content"],function(base,content){
	var linkList=document.getElementsByTagName("a");
	if(linkList.length<1) return;
	var accessKeyLinkList=[];
	for(var i=0,len=linkList.length;i<len;i++)
	{
		if(!linkList[i].getAttribute("accesskey")) continue;
		accessKeyLinkList.push(linkList[i]);
	}
	var ul=document.createElement("ul");
	document.body.appendChild(ul);
	accessKeyLinkList.forEach(function(item){
	 	content.displayAccessKey(item,ul);
	})
})


