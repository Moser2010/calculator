function makeInput() {
    var mkInput = document.createElement("input");
    mkInput.className = "cal-input";
    mkInput.id = "DtaInput";
    document.body.appendChild(mkInput);
}


var num = 2

function handleButton(event){
  document.getElementById('DtaInput').value = document.getElementById('DtaInput').value + num
  
}

function makeButton(text){
  var button = document.createElement('button');
  button.className = 'cal-button';
  button.id = text;
  button.appendChild(document.createTextNode(text));
  button.addEventListener('click', handleButton, false);
  document.body.appendChild(button);
  return button;
}


makeInput()
makeButton("Cody");

  
  

  
  /*
mkButtons.textContent = "1"


for(var i=0; i < 10; i++) {
    var mkButtons = ;
    document.body.appendChild(mkButtons);
 
}

*/

//makes the buttons
/*
for(var i = 0; i < 10; i++) {
    var mkButtons = i
    mkButtons = document.createElement("button")
    document.body.appendChild(mkButtons);
    mkButtons.textContent = i
    console.log(i)
}
 
 mkButtons.addEventListener('click', enterData, false);
 
 
 function enterData() {
         console.log("button was pressed")
} 

*/