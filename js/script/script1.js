function sumOfNumber(){
    let fNum = document.getElementById("fNum").value;
    let secNum = document.getElementById("secNum").value;
    let sum = parseInt(fNum) + parseInt(secNum);
    document.getElementById("print").innerHTML = "Sum of numbers = " + sum;
}

function returnValue(x,y){
    return x+y;
}

let val = returnValue(10,20);
console.log(val);

function validation(){
    let number = document.getElementById("number").value;
    let numLength = number.length;
    let startNum = number.substr(0,2);
    let last9Number = number.substr(numLength-9,9);

    if(numLength < 9){
        alert("Invalid number validation");
        document.getElementById("printLabel").innerHTML = "Invalid number validation";
    }else if(numLength == 9){
        alert("Number validation successfully!!");
        document.getElementById("printLabel").innerHTML = "Phone Number: 94"+number;
    }else if(numLength == 10){
        alert("Number validation successfully!!");
        document.getElementById("printLabel").innerHTML = "Phone Number: 94"+last9Number;
    }else if(startNum==94 && numLength > 11){
        alert("Invalid number validation");
        document.getElementById("printLabel").innerHTML = "Invalid Number validation";
    }
}