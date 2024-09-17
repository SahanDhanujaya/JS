function func() {
    let sum = (x, y) => x + y;
    let fNum = parseInt(document.getElementById("num").value);
    let secNum = parseInt(document.getElementById("num1").value);
    document.getElementById("sum").innerHTML = "Sum is : " + sum(fNum, secNum);
}
document.addEventListener("dblclick",func)