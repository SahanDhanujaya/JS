let student = {
    fName: "Sahan",
    secondName:"Dhanujaya",
    age: 21,
    school:"LCC",
    
    constructor(fName,secondName,age,school){
        this.fName = fName;
        this.secondName = secondName;
        this.age = age;
        this.school = school;
    },
    printData(){
        document.querySelector(".content").innerHTML = "Student name is "+this.fName + " " + this.secondName + ". He is " + this.age + "years old . And He went to " + this.school + "."; 
    }
}