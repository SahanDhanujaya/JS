document.getElementById("btn").addEventListener("click",dataSave);
document.getElementById("data").innerHTML = "Name is : " + localStorage.getItem("Name1");
function dataSave() {
    let value = document.getElementById("name").value;
    localStorage.setItem("Name1", value);
    document.getElementById("data").innerHTML = "Name is : " + value;
}
