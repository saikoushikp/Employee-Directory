function openForm() {
    document.getElementById("addEmployeeForm").style.display = "block";
    console.log("open")
}

function closeForm() {
    document.getElementById("addEmployeeForm").style.display = "none";
}


class Employee {
    constructor(firstName,
        lastName,
        email,
        jobTitle,
        office,
        department,
        phoneNumber,
        skypeId) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.jobTitle = jobTitle
        this.office = office
        this.department = department
        this.phoneNumber = phoneNumber
        this.skypeId = skypeId


    }



}


var employeeData = [];

var formInputs = ["fname","lname","email","jobTitle","office","department","phoneNumber","skypeId"];

function submitEmployee(){
   console.log(document.getElementById("employeeForm"))
   closeForm()
}




function addEmployee() {
    var empDiv = document.createElement("div")
    empDiv.classList.add("employee")
    var empImgDiv = document.createElement("div")
    empImgDiv.classList.add("a-inline")
    empImgDiv.classList.add("employee-img")
    var empImg = document.createElement("img")
    empImg.src = "man128.png"
    empImg.width = 56
    empImg.height = 56
    empImgDiv.appendChild(empImg)
    empDiv.appendChild(empImgDiv)



    var empData = document.createElement("div")
    empData.classList.add("a-inline")

    var empNameDiv = document.createElement("div")
    var empName = document.createElement("h4")
    empName.classList.add("margin-zero")
    empName.appendChild(document.createTextNode("Antony Morris"))
    empNameDiv.appendChild(empName)
    empData.appendChild(empNameDiv)

    var empTitleDiv = document.createElement("div")
    var empTitle = document.createElement("a")
    empTitle.classList.add("a-small")
    empTitle.appendChild(document.createTextNode("Sharepoint Practice Head"))
    empTitleDiv.appendChild(empTitle)
    empData.appendChild(empTitleDiv)



    var empDepartDiv = document.createElement("div")
    var empDepart = document.createElement("a")
    empDepart.classList.add("a-small")
    empDepart.appendChild(document.createTextNode("IT Department"))
    empDepartDiv.appendChild(empDepart)
    empData.appendChild(empDepartDiv)


    empDiv.appendChild(empData)

    document.getElementById("employee-content").appendChild(empDiv)
}