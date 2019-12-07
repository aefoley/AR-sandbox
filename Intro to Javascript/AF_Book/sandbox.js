/*
var ans = prompt("How much wood would a woodchuck chuck if a woodchuck could chuck wood?","");

if(ans) {
	alert("You said " + "\"" + ans + "\"");
}
else{
	alert("You didn't answer!");
}
*/


/*
window.onload = initAll;

function initAll() {
	document.getElementById("redirect").onclick = initRedirect;
}

function initRedirect(){
	window.location = "sandbox_redirect.html";
	return false;
}
*/

window.onload = initAll;

function initAll() {
	document.getElementById("redirect").onclick = initRedirect;
}

function initRedirect(){
	alert("We are not responsible for what goes on away from this page");
	window.location = this;
	return false;
}