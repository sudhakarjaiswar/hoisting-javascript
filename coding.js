// ------------QUESTION - 1 ------------//

var a = 6;
var b = 7;
 
function addTwoNumbers() {
    var c = a+b;
    console.log(c);
}
addTwoNumbers();

// ------------QUESTION - 2 ----------//
var a = 7;
var b = 9;

function multiplyNumbers() {
    var c = a*b;
    console.log(c);
}

multiplyNumbers();

// -----------QUESTION- 3 -----------//

function Sum() {
    var a = 14;
    var b = 16;
    var c = a+b;
    console.log(c);
}
Sum();

// -----------QUESTION- 4 -----------//

function hoist() {
    let x = 5;
    var y = 9;
    const z = 11;
    console.log(x);
    console.log(y);
    console.log(z);
}

hoist();

// -----------QUESTION- 5 -----------//

hoister();

function hoister() {
    let myName = "Sudhakar";
    console.log(myName);
}








