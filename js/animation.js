define([], function() {
	function positionElement(ele, x, y) {
		ele.style.position = "absolute";
		ele.style.left = parseInt(x) + "px" || 0;
		ele.style.top = parseInt(y) + "px" || 0;
	}

	function moveElement(ele, finalX, finalY, intervel) {
		finalX = parseInt(finalX);
		finalY = parseInt(finalY);
		if (ele.interverID) {
			clearInterval(ele.interverID);
		}

		function step() {
			var currentX = parseInt(window.getComputedStyle(ele).left);
			var currentY = parseInt(window.getComputedStyle(ele).top);
			var dist = 0
			if (currentX === finalX && currentY === finalY) {
				clearInterval(intervelID);
			}
			if (currentX < finalX) {
				dist = Math.ceil((finalX - currentX) / 10);
				currentX += dist;
			} else if (currentX > finalX) {
				dist = Math.ceil((currentX - finalX) / 10);
				currentX -= dist;
			}
			if (currentY < finalY) {
				dist = Math.ceil((finalX - currentX) / 10);
				currentY+=dist;
			} else if (currentY > finalY) {
				dist = Math.ceil((currentY - finalY) / 10);				
				currentY-=dist;
			}
			ele.style.left = currentX + "px";
			ele.style.top = currentY + "px";
		}
		var intervelID = setInterval(step, intervel);
		ele.interverID = intervelID;
	}
	return {
		positionElement: positionElement,
		moveElement: moveElement
	}
})