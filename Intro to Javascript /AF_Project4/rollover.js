window.onload = rolloverInit; //triggered when the window finished loading
function rolloverInit() {
	for (var i=0; i<document.images.length; i++){
		if (document.images[i].parentNode.tagName == "A"){
			setupRollover(document.images[i]);
		}
	}

}

function setupRollover(thisImage) {
	thisImage.outImage = new Image();
	thisImage.outImage.src = thisImage.src;
	thisImage.onmouseout =  rollOut;
	
	thisImage.overImage = new Image();
	thisImage.overImage.src = "images/" + thisImage.id + "_on.png";
	thisImage.onmouseover = rollOver;
	
	thisImage.clickImage = new Image();
	thisImage.clickImage.src = "images/" + thisImage.id + "_click.png";
	thisImage.onmousedown = rollClick;
}

function rollOut() {
	this.src = this.outImage.src;
}

function rollOver() {
	this.src = this.overImage.src;
}

function rollClick() {
	this.src = this.clickImage.src;
	setTimeout(function() {alert('You have now clicked!');},303);
	
}

