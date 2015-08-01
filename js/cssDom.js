define([], function() {
	function stripe(ele, prop, value) {
		if (ele.children.length < 1) return;
		var sign = true;
		Array.prototype.forEach.call(ele.children, function(item) {
			if (sign) {
				item.style[prop] = value;
				sign = false;
			} else {
				sign = true;
			}
		})
	}

	function show(ele) {
		var bro = ele.parentNode.children;
		Array.prototype.forEach.call(bro, function(item) {
			if (item.nodeName === ele.nodeName) {
				item.classList.add("j-hiddeen");
				item.classList.remove("j-visibleBlock")
			}
		})
		ele.classList.add("j-visibleBlock");
		ele.classList.remove("j-hiddeen");
	}
	return {
		stripe: stripe,
		show: show
	}
})