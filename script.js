function compute()
{
	
    am = document.getElementById("principal").value; //amount
    i = document.getElementById("rate").value; // interest
    y = document.getElementById("years").value; // years
    var val=(am*i*y)/100;
    var p = document.createElement('p');
  	document.body.appendChild(p);
  	p.textContent='If you deposit ' + am +' at an interest ' +i +'%.'+' You will receive an amount of '+ val;
        
