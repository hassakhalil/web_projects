//listen on for events (button clicks)
//types of events
//clear :
//      clear-entry-> remove the last entry
//      clear-all-->  reset the number to zero
//number : add the number associated the the button to the number
//operator : 
//           store the first the number somewhere
//           reset the first variable to 0
//           wait for the user to enter the second operand
//           perform the operation  
let number="";
let add = -1;
let sub = -1;
let div = -1;
let mul = -1;

const one =document.querySelector(".one");
one.addEventListener("click",function() {
    number+="1";
    document.querySelector(".result").innerHTML = number;
});
const two =document.querySelector(".two");
two.addEventListener("click",function() {
    number+="2";
    document.querySelector(".result").innerHTML = number;
});
const three =document.querySelector(".three");
three.addEventListener("click",function() {
    number+="3";
    document.querySelector(".result").innerHTML = number;
});
const four =document.querySelector(".four");
    four.addEventListener("click",function() {number+="4";
    document.querySelector(".result").innerHTML = number;
});
const five =document.querySelector(".five");
    five.addEventListener("click",function() {number+="5";
    document.querySelector(".result").innerHTML = number;
});
const six =document.querySelector(".six");
six.addEventListener("click",function() {
    number+="6";
    document.querySelector(".result").innerHTML = number;
});
const seven =document.querySelector(".seven");
seven.addEventListener("click",function() {
    number+="7";
    document.querySelector(".result").innerHTML = number;
});
const eight =document.querySelector(".eight");
eight.addEventListener("click",function() {
    number+="8";
    document.querySelector(".result").innerHTML = number;
});
const nine =document.querySelector(".nine");
nine.addEventListener("click",function() {
    number+="9";
    document.querySelector(".result").innerHTML = number;
});
const zero =document.querySelector(".zero");
zero.addEventListener("click",function() {
    if (number.length > 0)
        number+="0";
    document.querySelector(".result").innerHTML = number;
});
const equality =document.querySelector(".equality");
equality.addEventListener("click",function() {
    document.querySelector(".result").innerHTML = number;
    let tmp =parseInt(number);
    if (add !== -1)
        tmp = add + parseInt(number);
    else if (sub !== -1)
        tmp = sub - parseInt(number);
    else if (mul !== -1)
        tmp = mul * parseInt(number);
    else if (div !== -1)
        tmp = div/parseInt(number);         
    add = sub = mul = div  =-1;
    number = tmp.toString();
    document.querySelector(".result").innerHTML = number;
});
const addition =document.querySelector(".addition");
addition.addEventListener("click",function() {
    add = parseInt(number);
    number = "";
    document.querySelector(".result").innerHTML = "0";
});

const substraction =document.querySelector(".substraction");
substraction.addEventListener("click",function() {
    sub = parseInt(number);
    number = "";
    document.querySelector(".result").innerHTML = "0";
});

const multiplication =document.querySelector(".multiplication");
multiplication.addEventListener("click",function() {
    mul = parseInt(number);
    number = "";
    document.querySelector(".result").innerHTML = "0";
});

const division =document.querySelector(".division");
division.addEventListener("click",function() {
    div = parseInt(number);
    number = "";
    document.querySelector(".result").innerHTML = "0";
});

const clearAll = document.querySelector(".clear-all");
clearAll.addEventListener("click", function(){
    number = "";
    document.querySelector(".result").innerHTML = "0";
});

const clearEntry = document.querySelector(".clear-entry");
clearEntry.addEventListener("click", function(){
    if (number.length !==0)
    {
        number = number.substring(0,number.length-1);
        if (number.length!==0)
            document.querySelector(".result").innerHTML = number;
        else
            document.querySelector(".result").innerHTML = "0";
    }
});






