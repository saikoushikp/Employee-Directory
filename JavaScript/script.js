

class FilterItem {
  constructor(name, count) {
    this.name = name
    this.count = count | 0
  }

  increment(){
    this.count++
  }
  decrement(){
    this.count--
  }
}

class Employee {

  constructor(img, firstName, lastName, email, jobTitle, office, department, phoneNumber, skypeId) {
    this.id = 0
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

  setId(value){
    this.id = value
  }
}




var idCount = 0;
var employeeData = [];
var departments = [new FilterItem("IT"), new FilterItem("Human Resources"), new FilterItem("MD"), new FilterItem("Sales")]
var offices = [new FilterItem("Seattle"), new FilterItem("India")]
var jobTitles = [new FilterItem("SharePoint Practice Head"), new FilterItem(".Net Development Lead"), new FilterItem("Recuriting Expert"), new FilterItem("BI Develper"), new FilterItem("Business Analyst")]







const filters = {
  dept: "departments-list",
  jobTitle: "job-titles-list",
  office: "offices-list"


}

 function addAlphabets(){
    const temp = document.getElementById('alphabets')
    for(i=97;i<123;i++){
      const txt = String.fromCharCode(i).toUpperCase()
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.appendChild(document.createTextNode(txt))
     
      a.onclick =()=>{
        const list = employeeData.filter((e) => e.firstName.charAt(0).toUpperCase() == txt)
        if(list.length==0){
          displayNoEmployee()
        }else{
          displayEmpsByList(list)
        }
      }
      li.appendChild(a)
      temp.appendChild(li)

    }
 }



addAlphabets()
showFilters()
displayEmpsByList(employeeData)
addListeners()
addPrefers()












function openForm() {
 
  var formdiv = document.getElementById("displayEmpForm")
  formdiv.style.display = "block";


}

function closeForm() {
  
  var formdiv = document.getElementById("displayEmpForm")
  formdiv.style.display = "none"
  const submitBtn = document.getElementById("submit")
  submitBtn.style.display = "block"
  const updateBtn = document.getElementById("update")
  updateBtn.style.display = "none"
  const imgSelect = document.getElementById("imgChoose")
  imgSelect.required = true;
  clearForm()
  
  


}




// add view more and view less

function addPrefers() {
  addPreferItems(departments, "department-select")
  addPreferItems(offices, "office-select")
  addPreferItems(jobTitles, "job-title-select")

}


function addPreferItems(list, selectId) {
  const select = document.getElementById(selectId)
  list.forEach((e) => {
    select.appendChild(createOption(e.name))
  })
}

function createOption(text){
   const option = document.createElement("option")
   option.value=text
  option.appendChild(document.createTextNode(text))
  return option
}






function addListeners() {

  document.getElementById('employee-form').addEventListener('submit',(ev)=>{
    ev.preventDefault()
    submitEmployeeForm()
    
  })



}


function pnameUpdate(_){
  document.getElementById('pname').value = document.getElementById('fname').value+ " " + document.getElementById('lname').value
}







function showFilters() {
  addFilterItems(filters.dept, departments)
  addFilterItems(filters.jobTitle, jobTitles)
  addFilterItems(filters.office, offices)


}

function updateFilter(employee){
const department = departments.findIndex((e)=>e.name==employee.department)
const office = offices.findIndex((e)=>e.name==employee.office)
const jobTitle = jobTitles.findIndex((e)=>e.name==employee.jobTitle)

departments[department].decrement()
offices[office].decrement()
jobTitles[jobTitle].decrement()

showFilters()

}



function addFilter(employee) {

const department = departments.findIndex((e)=>e.name==employee.department)
const office = offices.findIndex((e)=>e.name==employee.office)
const jobTitle = jobTitles.findIndex((e)=>e.name==employee.jobTitle)

departments[department].increment()
offices[office].increment()
jobTitles[jobTitle].increment()

showFilters()

}

function addFilterItems(ulName, list) {
  const ul = document.getElementById(ulName);
  ul.innerHTML = ""

  if (list.length > 5) {
    for (i = 0; i < 5; i++) {
      ul.appendChild(createFilterLi(list[i], ulName))
    }
    ul.appendChild(createViewMore(list, ulName))
  } else {
    list.forEach((e) => {
      ul.appendChild(createFilterLi(e, ulName))
    })
  }



}

function filterEmployee(filterBy, data) {
  if (filterBy == filters.dept) {
    return employeeData.filter((e) => e.department == data)
  }
  else if (filterBy == filters.jobTitle) {
    return employeeData.filter((e) => e.jobTitle == data)
  }
  else {
    return employeeData.filter((e) => e.office == data)
  }
}


function createFilterLi(filterItem, filterBy) {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.appendChild(document.createTextNode(filterItem.name + " ("))
  a.appendChild(document.createTextNode(filterItem.count))
  a.appendChild(document.createTextNode(")"))
  a.onclick = (_) => {
    FilterClick(filterBy, filterItem.name)
  }

  li.appendChild(a)
  return li
}

function createViewLess(list, ulName) {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.className = "view-more"
  a.appendChild(document.createTextNode("view less"))
  a.onclick = (_) => {
    addFilterItems(ulName, list)
  }
  li.appendChild(a)

  return li
}

function createViewMore(list, ulName) {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.className = "view-more"
  a.appendChild(document.createTextNode("view more"))
  a.onclick = (_) => {
    const ul = document.getElementById(ulName);
    ul.innerHTML = ""
    list.forEach((e) => {
      ul.appendChild(createFilterLi(e, ulName))
    })
    ul.appendChild(createViewLess(list, ulName))
  }
  li.appendChild(a)

  return li
}



function FilterClick(filterBy, data) {
  const eData = filterEmployee(filterBy, data)
  displayEmpsByList(eData)
}


function displayEmpsByList(list) {
  if(list.length==0){
      displayNoEmployee()
    }else{
  const employeeView = document.getElementById("employee-content")
  employeeView.innerHTML = ""
  list.forEach((e) => {
    displayEmp(e)
  })
}
}







function clearForm() {
  document.getElementById("employee-form").reset()
  document.getElementById('pimg').src = "#"
  document.getElementById('empId').value=""

}




function showImage(event) {
  document.getElementById('pimg').src = URL.createObjectURL(event.target.files[0]);
}

function displayEmp(employee) {
  hideNoEmployee()
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
  call.src = "call.png"
  call.classList = "icon"
  tdiv.appendChild(call)
  var mail = document.createElement("img")
  mail.src = "mail.png"
  mail.classList = "icon"
  tdiv.appendChild(mail)
  var msg = document.createElement("img")
  msg.src = "speech-bubble.png"
  msg.classList = "icon"
  tdiv.appendChild(msg)
  var star = document.createElement("img")
  star.src = "star.png"
  star.classList = "icon"
  tdiv.appendChild(star)
  var heart = document.createElement("img")
  heart.src = "heart.png"
  heart.classList = "icon"
  tdiv.appendChild(heart)
  empData.appendChild(tdiv)


  empDiv.appendChild(empData)
  document.getElementById("employee-content").appendChild(empDiv)

  empDiv.addEventListener("click",(_)=>{
      displayEmployeeData(employee)
  });

 

}





function displayEmployeeData(employee){
  setEmployeeData(employee)
  const submitBtn = document.getElementById("submit")
  submitBtn.style.display = "none"
  const updateBtn = document.getElementById("update")
  updateBtn.style.display = "block"
  const imgSelect = document.getElementById("imgChoose")
  imgSelect.required = false;
  openForm()

}

function findEmployeeIndexById(id){
  return employeeData.findIndex((element)=>element.id == id)
}





function getEmployeeData(){
  const img = document.getElementById('pimg').src
  const firstName = document.getElementById('fname').value
  const lastName = document.getElementById('lname').value
  const email = document.getElementById('email').value
  const jobTitle = document.getElementById('job-title-select').value
  const office = document.getElementById('office-select').value
  const department = document.getElementById('department-select').value
  const phoneNumber = document.getElementById('phone-number').value
  const skypeId = document.getElementById('skype-id').value

  return  new Employee(img, firstName, lastName, email, jobTitle, office, department, phoneNumber, skypeId)

}

function setEmployeeData(employee){
  document.getElementById('pimg').src = employee.img
  document.getElementById('empId').value = employee.id
  document.getElementById('pname').value = employee.firstName +" "+employee.lastName
 document.getElementById('fname').value = employee.firstName
 document.getElementById('lname').value = employee.lastName
 document.getElementById('email').value = employee.email
 document.getElementById('job-title-select').value = employee.jobTitle
 document.getElementById('office-select').value = employee.office
 document.getElementById('department-select').value = employee.department
 document.getElementById('phone-number').value = employee.phoneNumber
 document.getElementById('skype-id').value = employee.skypeId
}





function submitEmployeeForm() {
 

  const employee = getEmployeeData()
  const empId = document.getElementById('empId').value
  if(empId==""){
    employee.setId(idCount++)
    displayEmp(employee)
    employeeData.push(employee)
    
  }else{
    const index = findEmployeeIndexById(empId)
    employee.setId(empId)
    updateFilter(employeeData[index])
    employeeData[index] = employee
    refreshData()
    const submitBtn = document.getElementById("submit")
    submitBtn.style.display = "block"
    const updateBtn = document.getElementById("update")
    updateBtn.style.display = "none"
    const imgSelect = document.getElementById("imgChoose")
    imgSelect.required = true;
  }
  addFilter(employee)
  closeForm()
  
  
  
}


function refreshData(){
  displayEmpsByList(employeeData)
}





function searchByKeyword(value) {
 

  const option = document.getElementById("filter-options").value
  
  if(value==""){
    refreshData()
  }
  else if(option=="preferredname"){
    const list = employeeData.filter((e) => toLowerCaseAndSearch(e.firstName,value) | toLowerCaseAndSearch(e.lastName,value))
    
      
      displayEmpsByList(list)
    
    
  }
  else if("email"==option){
    const list = employeeData.filter((e)=>toLowerCaseAndSearch(e.email,value))
    
      
      displayEmpsByList(list)
    
   
  }
  else if("phno"==option){
    const list = employeeData.filter((e)=>e.phoneNumber.indexOf(value)>-1)
    
      displayEmpsByList(list)
    

  }
  else{
    refreshData()
  }
  
   document.getElementById('search-input').value=''
 

 
}

function hideNoEmployee(){
  document.getElementById("no-employee").style.display ="none"
  document.getElementById("employee-content").style.display ="grid"
}


function displayNoEmployee(){
  document.getElementById("no-employee").style.display ="block"
      document.getElementById("employee-content").style.display ="none"
}

function toLowerCaseAndSearch(element,value){
  return element.toLowerCase().indexOf(value.toLowerCase())>-1

}






function clearSearch(){
  document.getElementById('search-input').value=''
  refreshData()
}
