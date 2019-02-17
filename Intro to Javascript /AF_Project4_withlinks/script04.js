window.onload = rolloverInit;

function rolloverInit() {
	for (var i=0; i<document.links.length; i++) {
		var linkObj =  document.links[i];
		if (linkObj.id) { //if linkObj has an id, is there another on the same page with the same id plus Img? If so, put it in imgObj
			var imgObj = document.getElementById(linkObj.id + "Img");
			if (imgObj) {
				setupRollover(linkObj,imgObj);
			}
		}
	}
}

function setupRollover(thisLink,thisImage) {
	thisLink.imgToChange = thisImage; //add a new parameter to the link object
	thisLink.onmouseout = function() {
		this.imgToChange.src = this.outImage.src;
	}
	thisLink.onmouseover = function() {
		this.imgToChange.src = this.overImage.src;
	}
	
	thisLink.outImage = new Image();
	thisLink.outImage.src = thisImage.src;

	thisLink.overImage = new Image();
	thisLink.overImage.src = "images/" + thisLink.id + "_on.png";
}
