function openForm() {
  
  var formdiv = document.getElementById("addEmployeeForm")
  formdiv.style.display = "block";
  addPrefer()

}

function closeForm() {
  var formdiv = document.getElementById("addEmployeeForm")
  formdiv.style.display = "none"
  removePrefer()



}

function removePrefer(){
  const department = document.getElementById("department-select")
  const jobTitle = document.getElementById("job-title-select")
  const office = document.getElementById("office-select")

  for(i=1;i<=department.options.length;i++){
    department.remove(i)
  }

  for(i=1;i<=jobTitle.options.length;i++){
    jobTitle.remove(i)
  }

  for(i=1;i<=office.options.length;i++){
    office.remove(i)
  }

  
 
}

// add view more and view less

function addPrefer(){

  const department = document.getElementById("department-select")
  const jobTitle = document.getElementById("job-title-select")
  const office = document.getElementById("office-select")
  Object.keys(departments).forEach((name)=>{
    const option = document.createElement("option")
    option.appendChild(document.createTextNode(name))
    department.appendChild(option)
  })

  Object.keys(offices).forEach((name)=>{
    const option = document.createElement("option")
    option.appendChild(document.createTextNode(name))
    office.appendChild(option)
  })

  Object.keys(jobTitles).forEach((name)=>{
    const option = document.createElement("option")
    option.appendChild(document.createTextNode(name))
    jobTitle.appendChild(option)
  })


}


function departmentSelected(){
  const departmentSelect = document.getElementById("department-select")
  const department = document.getElementById("department")
  department.value = departmentSelect.value
}

function jobTitleSelected(){
  const jobTitleSelect = document.getElementById("job-title-select")
  const jobTitle = document.getElementById("job-title")
  jobTitle.value = jobTitleSelect.value
}

function officeSelected(){
  const officeSelect = document.getElementById("office-select")
  const office = document.getElementById("office")
  office.value = officeSelect.value

}





function addListeners() {

  //listener for generation of preferred name

  var firstName = ""
  var lastName = ""

  const fname = document.getElementById('fname')
  const lname = document.getElementById('lname')


  fname.addEventListener("input", (_) => {
    firstName = fname.value
    document.getElementById('pname').value = firstName + " " + lastName
  })

  lname.addEventListener("input", (_) => {
    lastName = lname.value
    document.getElementById('pname').value = firstName + " " + lastName
  })


 
 

  

}


addListeners()




var employeeData = [];
var departments = {}
var offices = {}
var jobTitles = {}




function addFilter(employee) {
  const department = departments[employee.department]
  const office = offices[employee.office]
  const jobTitle = jobTitles[employee.jobTitle]
  if (typeof department === "undefined") {
    departments[employee.department] = 1
  } else {
    departments[employee.department] = department + 1
  }

  if (typeof office === "undefined") {
    offices[employee.office] = 1
  }
  else {
    offices[employee.office] = office + 1
  }

  if (typeof jobTitle === "undefined") {
    jobTitles[employee.jobTitle] = 1
  } else {
    jobTitles[employee.jobTitle] = jobTitle + 1
  }

  addFilterItems("departments-list", departments)
  addFilterItems("offices-list", offices)
  addFilterItems("job-titles-list", jobTitles)

}



function addFilterItems(ulName, list) {

  const ul = document.getElementById(ulName);
  ul.innerHTML = ""
  Object.keys(list).forEach((name) => {
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.appendChild(document.createTextNode(name + " ("))
    a.appendChild(document.createTextNode(list[name]))
    a.appendChild(document.createTextNode(")"))
    a.onclick = (e)=>{
        console.log(name)
        //todo
    }
    li.appendChild(a)
    ul.appendChild(li)
  })



}

function clearForm(){
  const inputs = document.querySelectorAll(".item-input input")
  inputs.forEach((e)=>{
    e.value=""
  })

}




function showImage(event) {
  document.getElementById('pimg').src = URL.createObjectURL(event.target.files[0]);
}

function addEmployee(employee) {

  var empDiv = document.createElement("div")
  empDiv.classList.add("employee")
  var empImgDiv = document.createElement("div")
  empImgDiv.classList.add("a-inline")
  empImgDiv.classList.add("employee-img")
  var empImg = document.createElement("img")
  empImg.src = employee.img
  empImg.width = 60
  empImg.height = 64
  empImgDiv.appendChild(empImg)
  empDiv.appendChild(empImgDiv)



  var empData = document.createElement("div")
  empData.classList.add("a-inline")
  empData.classList.add("employee-details")
  

  var empNameDiv = document.createElement("div")
  var empName = document.createElement("h4")
  empName.classList.add("margin-zero")
  empName.appendChild(document.createTextNode(employee.firstName + " " + employee.lastName))
  empNameDiv.appendChild(empName)
  empData.appendChild(empNameDiv)

  var empTitleDiv = document.createElement("div")
  var empTitle = document.createElement("a")
  empTitle.classList.add("a-small")
  empTitle.appendChild(document.createTextNode(employee.jobTitle))
  empTitleDiv.appendChild(empTitle)
  empData.appendChild(empTitleDiv)



  var empDepartDiv = document.createElement("div")
  var empDepart = document.createElement("a")
  empDepart.classList.add("a-small")
  empDepart.appendChild(document.createTextNode(employee.department))
  empDepartDiv.appendChild(empDepart)
  empData.appendChild(empDepartDiv)

  var tdiv = document.createElement("div")
  var call = document.createElement("img")
  call.src="call.png"
  call.width =12
  call.height = 12
  tdiv.appendChild(call)
  var mail = document.createElement("img")
  mail.src ="mail.png"
  mail.width =12
  mail.height =12
  tdiv.appendChild(mail)
  var msg = document.createElement("img")
  msg.src="speech-bubble.png"
  msg.width = 12
  msg.height = 12
  tdiv.appendChild(msg)
  var star = document.createElement("img")
  star.src = "star.png"
  star.width = 12
  star.height =12
  tdiv.appendChild(star)
  var heart = document.createElement("img")
  heart.src = "heart.png"
  heart.width = 12
  heart.height =12
  tdiv.appendChild(heart)
  empData.appendChild(tdiv)


  empDiv.appendChild(empData)
  document.getElementById("employee-content").appendChild(empDiv)

  addFilter(employee)
  
}





function submitEmployeeForm(){
  const img = document.getElementById('pimg')
  const firstName = document.getElementById('fname')
  const lastName = document.getElementById('lname')
  const email = document.getElementById('email')
  const jobTitle = document.getElementById('job-title')
  const office = document.getElementById('office')
  const department = document.getElementById('department')
  const phoneNumber = document.getElementById('phone-number')
  const skypeId = document.getElementById('skype-id')
   const employee = new Employee(img.src, firstName.value, lastName.value, email.value, jobTitle.value, office.value, department.value, phoneNumber.value, skypeId.value)
   addEmployee(employee)
   employeeData.push(employee)
   closeForm()
   clearForm()

}



class Employee {

  constructor(img, firstName, lastName, email, jobTitle, office, department, phoneNumber, skypeId) {
    this.img = img
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








