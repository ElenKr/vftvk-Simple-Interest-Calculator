function compute()
{	
  var am = parseInt(document.getElementById("principal").value); //amount
  var i = document.getElementById("rate").value; // interest
  var y = parseInt(document.getElementById("years").value); // years
  var k = parseInt(2021+y);
  var sum=(am*i*y)/100;
  document.getElementById("addresults").innerHTML = 'If you deposit <mark class="yellow">'+
  am+',</mark> <br/>at an interest rate of <mark class="yellow">'
  +i+'%</mark>. <br/>You will receive an amount of <mark class="yellow">'
  +sum +'</mark>, <br/> in the year <mark class="yellow">'+ k+'</mark>';
        
}

function updatevalue(val)
{ 
  document.getElementById('textInput').innerHTML=' '+val+' %';
}

function checkdata(){
  //create references to the input elements we wish to validate
  var amount = document.getElementById("principal");
 

  //Check if amount field is empty
  if(amount.value == "" || amount.value<=0){
        alert("Please enter a positive number");
        amount.focus();
        return false;
  }

   //If all is well return true.
  compute();
  return true;
}

window.onload = function () {
  var ddl = document.getElementById('myselect').getElementsByTagName("select")[0];
  for (var i = 1; i <= 100; i++) {
      var theOption = new Option;
      theOption.text = i;
      theOption.value = i;
      ddl.options[i] = theOption;
  }
};

