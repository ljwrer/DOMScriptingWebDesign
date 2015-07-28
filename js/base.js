/* base interface */
define([], function() {
	var print = function(value) {
		document.write(value);
	}
	var println = function(value) {
		print(value + "<br/>");
	}
	var addEvent = document.addEventListener ? function(elem, event, listener, useCapture) {
		elem.addEventListener(event, listener, useCapture);
	} : function(elem, event, listener) {
		elem.attachEvent('on' + event, listener, useCapture);
	}
	var delEvent = document.removeEventListener ? function(elem, event, listener, useCapture) {
		elem.removeEventListener(event, listener, useCapture);
	} : function(elem, event, listener) {
		elem.detachEvent('on' + event, listener, useCapture);
	}

	var getElementsByClassName = function(className, tag, elm) {
		if (document.getElementsByClassName) {
			getElementsByClassName = function(className, tag, elm) {
				elm = elm || document;
				var elements = elm.getElementsByClassName(className),
					nodeName = (tag) ? new RegExp("\\b" + tag + "\\b", "i") : null,
					returnElements = [],
					current;
				for (var i = 0, il = elements.length; i < il; i += 1) {
					current = elements[i];
					if (!nodeName || nodeName.test(current.nodeName)) {
						returnElements.push(current);
					}
				}
				return returnElements;
			};
		} else if (document.evaluate) {
			getElementsByClassName = function(className, tag, elm) {
				tag = tag || "*";
				elm = elm || document;
				var classes = className.split(" "),
					classesToCheck = "",
					xhtmlNamespace = "http://www.w3.org/1999/xhtml",
					namespaceResolver = (document.documentElement.namespaceURI === xhtmlNamespace) ? xhtmlNamespace : null,
					returnElements = [],
					elements,
					node;
				for (var j = 0, jl = classes.length; j < jl; j += 1) {
					classesToCheck += "[contains(concat(' ', @class, ' '), ' " + classes[j] + " ')]";
				}
				try {
					elements = document.evaluate(".//" + tag + classesToCheck, elm, namespaceResolver, 0, null);
				} catch (e) {
					elements = document.evaluate(".//" + tag + classesToCheck, elm, null, 0, null);
				}
				while ((node = elements.iterateNext())) {
					returnElements.push(node);
				}
				return returnElements;
			};
		} else {
			getElementsByClassName = function(className, tag, elm) {
				tag = tag || "*";
				elm = elm || document;
				var classes = className.split(" "),
					classesToCheck = [],
					elements = (tag === "*" && elm.all) ? elm.all : elm.getElementsByTagName(tag),
					current,
					returnElements = [],
					match;
				for (var k = 0, kl = classes.length; k < kl; k += 1) {
					classesToCheck.push(new RegExp("(^|\\s)" + classes[k] + "(\\s|$)"));
				}
				for (var l = 0, ll = elements.length; l < ll; l += 1) {
					current = elements[l];
					match = false;
					for (var m = 0, ml = classesToCheck.length; m < ml; m += 1) {
						match = classesToCheck[m].test(current.className);
						if (!match) {
							break;
						}
					}
					if (match) {
						returnElements.push(current);
					}
				}
				return returnElements;
			};
		}
		return getElementsByClassName(className, tag, elm);
	};

	function popup(winURL) {
		window.open(winURL, "popup", "width=320,height=480");
	}

	function insertAfter(newElement, targetElement) {
		var parent = targetElement.parentNode;
		if (targetElement === parent.lastChild) {
			parent.appendChild(newElement);
		} else {
			parent.insertBefore(newElement, targetElement.nextSibling);
		}
	}

	/* AJAX */
	function getHTTPObject(){
		if(typeof XMLHttpRequest===undefined)
		{
			try{
				return new ActiveXObject("Msxml2.XMLHTTP.6.0");
			}catch(e){
				//TODO handle the exception
			}
			try{
				return new ActiveXObject("Msxml2.XMLHTTP.3.0");				
			}catch(e){
				//TODO handle the exception
			}
			try{
				return new ActiveXObject();
			}catch(e){
				//TODO handle the exception
			}
		}
		var xhr=new XMLHttpRequest();
		return xhr;
	}

	return {
		getElementsByClassName: getElementsByClassName,
		popup: popup,
		insertAfter: insertAfter,
		getHTTPObject:getHTTPObject
	}
})