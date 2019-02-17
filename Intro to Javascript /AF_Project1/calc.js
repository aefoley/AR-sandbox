/*
	Max Coller
*/

function appendMe(val)
{
	if(document.getElementById("disp").value=='0')
	
	{
	  	document.getElementById("disp").value=val;
	}
		else if(val=='.' && document.getElementById("disp").value.indexOf('.')>-1) //do nothing, because we already have a decimal point
	{
	
	}
		else //in any other case, we just append
	{
	  	document.getElementById("disp").value+=val;
	}

}


function clearAll()
{
	//alert(val);
	document.getElementById("disp").value='0';
}


function checkBrowser()
{
	alert("checking"); 
	document.getElementById("warning").style.display='none'; 
}


function plusMinus()
{
	document.getElementById("disp").value=(document.getElementById("disp").value*-1);
}

