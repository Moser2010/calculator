var array = [1,2,3,4,5,6,7,8,9,"+","-","*"]

function makeInput() {
    var mkInput = document.createElement("input");
    mkInput.className = "cal-input";
    mkInput.id = "DtaInput";
    document.body.appendChild(mkInput);
}


var num = 2

function handleButton(event){
  document.getElementById('DtaInput').value = document.getElementById('DtaInput').value + buttonNum();
  
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

function buttonNum() {
    if (array == 1) {
        return "its 1";
    } else {
    return "cat";
    }ua
}
function buttons() {
    for(var i = 0; i < array.length; i++) {
        makeButton(array[i]);
       
        console.log(i);
    }
}

makeInput();

buttons();
makeButton("=");

  
  

  
  /*
mkButtons.textContent = "1"


for(var i=0; i < 10; i++) {
    var mkButtons = ;
    document.body.appendChild(mkButtons);
 
}

*/

//makes the buttons

