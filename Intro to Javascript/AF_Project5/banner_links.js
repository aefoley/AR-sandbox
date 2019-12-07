window.onload = initBannerLink;

var thisAd = 0;

function initBannerLink() {
	if (document.getElementById("adBanner").parentNode.tagName == "A") {
		document.getElementById("adBanner").parentNode.onclick = newLocation;
	}
	
	rotate();
}

function newLocation() {
	var adURL = new Array("chuckit.com","epicurious.com","pantone.com");
	document.location.href = "http://www." + adURL[thisAd];
	return false;
}

function rotate() {
	var adImages = new Array("images/ball_2.jpg","images/apples2.jpg","images/pantone_2.jpg");

	thisAd++;
	if (thisAd == adImages.length) {
		thisAd = 0;
	}
	document.getElementById("adBanner").src = adImages[thisAd];

	setTimeout(rotate, 1.5 * 1000);
}
