//array of numbers for our buttons
var array = [7, 8, 9, 4, 5, 6, 1, 2, 3, "+", "-", "*"];

//makes the Input
var div = document.querySelector("div");
    div.className = "wrapper";
    
function makeInput() {
    var mkInput = document.createElement("input");
    mkInput.className = "cal-input";
    mkInput.id = "DtaInput";
    div.appendChild(mkInput);
}



//this puts text inside of our input when we do our click event.
function handleButton(button) {
    document.getElementById('DtaInput').value = document.getElementById('DtaInput').value + buttonNum(button);
}


//this makes a button and listens for a click on the button.
function makeButton(text) {
    var button = document.createElement('button');
    button.className = 'cal-button';
    button.id = text;

    button.appendChild(document.createTextNode(text));
    button.addEventListener('click', function() {
        buttonNum(button,document.getElementById('DtaInput'));
        
    }, false);
    div.appendChild(button);
    return button;
}
//if number inside of button is == 1 return "its 1"

function buttonNum(button,display) {
    if (button.id === "=") {
        display.value = math.eval(display.value);
    }
    else {
        display.value = display.value + button.id;
    }
}

function buttons() {
    for (var i = 0; i < array.length; i++) {
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
