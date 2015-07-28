require.config({
	baseUrl: "../js",
	paths: {
		"base": "base"
	}
});
require(["base"], function(base) {
	var xhr = base.getHTTPObject();
	xhr.open("GET", "../js/main.js", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status >= 200 && xhr.status <= 300 || xhr.status === 304) {
				alert(i);
				var p = document.createElement("p");
				p.innerHTML = xhr.responseText;
				document.body.appendChild(p);
			} else {
				alert(xhr.status)
			}
		}
	}

});