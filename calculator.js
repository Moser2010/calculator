//array of numbers for our buttons
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*"]

//makes the Input

function makeInput() {
    var mkInput = document.createElement("input");
    mkInput.className = "cal-input";
    mkInput.id = "DtaInput";
    document.body.appendChild(mkInput);
}

function br() {
    document.createElement('br');
    return br
}
//this is not used
//var num = event.target.textContent;


//this puts text inside of our input when we do our click event.
function handleButton(button) {
    debugger;
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
    document.body.appendChild(button);
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
br();
buttons();
br();
makeButton("=");





/*
mkButtons.textContent = "1"


for(var i=0; i < 10; i++) {
    var mkButtons = ;
    document.body.appendChild(mkButtons);
 
}

*/

//makes the buttons
