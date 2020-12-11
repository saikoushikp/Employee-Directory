function openForm() {
    document.getElementById("addEmployeeForm").style.display = "block";
    
}

function closeForm() {
    document.getElementById("addEmployeeForm").style.display = "none";
}


class Employee {
    constructor(node) {
        this.firstName = node.elements["fname"].value
        this.lastName = node.elements["lname"].value
        this.email = node.elements["pname"].value
        this.jobTitle = node.elements["jobTitle"].value
        this.office = node.elements["office"].value
        this.department = node.elements["department"].value
        this.phoneNumber = node.elements["phoneNumber"].value
        this.skypeId = node.elements["skypeId"].value


    }



}


var employeeData = [];

var formInputs = ["fname","lname","email","jobTitle","office","department","phoneNumber","skypeId"];

function submitEmployee(){


    var info = new Employee(document.getElementById("employeeForm"))
    console.log(info)
   closeForm()
   addEmployee(info.firstName+" "+info.lastName,info.jobTitle,info.department)
}




function addEmployee(name,title,department) {
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
    empName.appendChild(document.createTextNode(name))
    empNameDiv.appendChild(empName)
    empData.appendChild(empNameDiv)

    var empTitleDiv = document.createElement("div")
    var empTitle = document.createElement("a")
    empTitle.classList.add("a-small")
    empTitle.appendChild(document.createTextNode(title))
    empTitleDiv.appendChild(empTitle)
    empData.appendChild(empTitleDiv)



    var empDepartDiv = document.createElement("div")
    var empDepart = document.createElement("a")
    empDepart.classList.add("a-small")
    empDepart.appendChild(document.createTextNode(department))
    empDepartDiv.appendChild(empDepart)
    empData.appendChild(empDepartDiv)


    empDiv.appendChild(empData)

    document.getElementById("employee-content").appendChild(empDiv)
}
