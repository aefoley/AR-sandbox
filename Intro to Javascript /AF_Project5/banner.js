window.onload = rotate;

var thisAd = 0;

function rotate() {
	var adImages = new Array("images/ball.jpg","images/apples.jpg","images/pantone.jpg");

	thisAd++;
	if (thisAd == adImages.length) {
		thisAd = 0;
	}
	document.getElementById("adBanner").src = adImages[thisAd];

	setTimeout(rotate, 3 * 1000);
}
