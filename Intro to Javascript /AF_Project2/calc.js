/*
	Max Coller
*/

function isNum()
{
	//start as true
	var isN = true;
	
	if(isNaN(document.getElementById("disp").value))
	{
	isN=false;
	alert("Non-numeric Data!");
	}
	
	return isN;
}
	
function set_getMem()
{
	if(isNum())
	{
	if(document.getElementById("mem").value=='') //nothing in there, so set it
		{
			document.getElementById("mem").value=document.getElementById("disp").value;
		}
		else //something in there, so display it
		{
			document.getElementById("disp").value=document.getElementById("mem").value;
		}
	}
}	

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
	document.getElementById("mem").value='';
	document.getElementById("disp").value='0';
	document.getElementById("param1").value='0';
	document.getElementById("operator").value='0';
	
}
 
function clearEntry()
{
	document.getElementById("disp").value='0';
}


/*
function checkBrowser()
{
	alert("checking"); 
	document.getElementById("warning").style.display='none'; 
}
*/


function plusMinus()
{
	document.getElementById("disp").value=(document.getElementById("disp").value*-1);
}


function setOp(val)
{
	if(isNum())
	{
	//first, set aside the initial value as entered
	document.getElementById("param1").value=document.getElementById("disp").value;
	
	//next, clear out that first number entered
	document.getElementById("disp").value=' ';
	
	//finally, store the operation
	document.getElementById("operator").value=val;
	}
} 

	

function calcMe() 
{
	var param1 = document.getElementById("param1").value;
	var operator = document.getElementById("operator").value;
	var param2 = document.getElementById("disp").value;
	
	document.getElementById("disp").value = eval(param1+operator+param2); 
}	