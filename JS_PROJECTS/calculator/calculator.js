
let number="";
let add = -1;
let sub = -1;
let div = -1;
let mul = -1;

function update(n){
    number +=n;
    document.querySelector(".result").innerHTML = number;
}

function empty_number()
{
    number = "";
    document.querySelector(".result").innerHTML = "0";
}

const one =document.querySelector(".one");
one.addEventListener("click",function() {update("1");});
const two =document.querySelector(".two");
two.addEventListener("click",function() {update("2");});
const three =document.querySelector(".three");
three.addEventListener("click",function() {update("3");});
const four =document.querySelector(".four");
four.addEventListener("click",function() {update("4");});
const five =document.querySelector(".five");
five.addEventListener("click",function() {update("5");});
const six =document.querySelector(".six");
six.addEventListener("click",function() {update("6");});
const seven =document.querySelector(".seven");
seven.addEventListener("click",function() {update("7");});
const eight =document.querySelector(".eight");
eight.addEventListener("click",function() {update("8");});
const nine =document.querySelector(".nine");
nine.addEventListener("click",function() {update("9");});
const zero =document.querySelector(".zero");
zero.addEventListener("click",function() {update("0");});
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
    empty_number();
});

const substraction =document.querySelector(".substraction");
substraction.addEventListener("click",function() {
    sub = parseInt(number);
    empty_number();
});

const multiplication =document.querySelector(".multiplication");
multiplication.addEventListener("click",function() {
    mul = parseInt(number);
    empty_number();
});

const division =document.querySelector(".division");
division.addEventListener("click",function() {
    div = parseInt(number);
    empty_number();
});

const clearAll = document.querySelector(".clear-all");
clearAll.addEventListener("click", function(){
    empty_number();
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






