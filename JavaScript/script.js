function openForm() {
  var formdiv = document.getElementById("addEmployeeForm")
  formdiv.innerHTML = ` <form id="employee_form" novalidate>
 <div>
  <div class="item a-inline" >
    <div class="item-label">
      <p>First Name:</p>
    </div>
    <div class="item-input">
        <input id="fname" type="text">
        <span id="fname_error" class="error"></span>
    </div>
  </div>

  <div   class="item a-inline" >
    <div class="item-label">
      <p>Last Name:</p>
    </div>
    <div class="item-input">
        <input id="lname" type="text">
        <span id="lname_error" class="error"></span>
    </div>
  </div>
 </div>


 <div class="item" >
  <div class="item-label">
    <p>Preferred Name:</p>
  </div>
  <div class="item-input">
      <input id="pname" type="text" disabled>
  </div>
</div>

<div class="item" >
  <div class="item-label">
    <p>Email:</p>
  </div>
  <div class="item-input">
      <input id="email" type="email">
      <span id="email_error" class="error"></span>
  </div>
</div>


<div class="item">
  <div>
    <div class="item-label">
      <p>Job Title:</p>
    </div>
    <div class="flex-div"  >
       <div class="item-input">
         <input id="job_title" type="text">
         <span id="job_title_error" class="error"></span>  
       </div>
       <div class="input-middle">--or--</div>
       <div class="input-last" >
         <select id="job_title_select" class="width-100"  > 
          <option>Select</option>
        </select>
       </div>
    </div>
  </div>
</div>


<div class="item">
  <div>
    <div class="item-label">
      <p>Office:</p>
    </div>
    <div class="flex-div"  >
       <div class="item-input">
         <input id="office" type="text">
         <span id="office_error" class="error"></span>  
       </div>
       <div class="input-middle">--or--</div>
       <div class="input-last" >
         <select id="office_select" class="width-100"  > 
          <option>Select</option>
        </select>
       </div>
    </div>
  </div>
</div>

<div class="item">
  <div>
    <div class="item-label">
      <p>Department:</p>
    </div>
    <div class="flex-div"  >
       <div class="item-input">
         <input id="department" type="text">
         <span id="department_error" class="error"></span>  
       </div>
       <div class="input-middle">--or--</div>
       <div class="input-last" >
         <select id="department_select" class="width-100"  > 
          <option>Select</option>
        </select>
       </div>
    </div>
  </div>
</div>


<div class="item" >
  <div class="item-label">
    <p>Phone Number:</p>
  </div>
  <div class="item-input">
      <input id="phone_number" type="text">
      <span id="phone_number_error" class="error"></span>
  </div>
</div>


<div class="item" >
  <div class="item-label">
    <p>Skype ID:</p>
  </div>
  <div class="item-input">
      <input id="skype_id" type="text">
      <span id="skype_id_error" class="error"></span>
  </div>
</div>
<div style="padding: 16px 8px;">
  <button type="button" onclick="closeForm()" style="float: left;">Cancel</button>
  <button type="button" onclick="validation()" style="float: right;">Submit</button>
</div>

 

</form>`

  formdiv.style.display = "block";

  addListeners()

}





function closeForm() {

  var formdiv = document.getElementById("addEmployeeForm")
  formdiv.style.display = "none"
  formdiv.innerHTML = ''


}

function addListeners() {

  regValidate.forEach((e) => {
    const ele = document.getElementById(e.id)
    ele.addEventListener("focus", (_) => {
      document.getElementById(e.error_id).innerHTML = ""
    })
  })

  selectValidate.forEach((e) => {
    const ele = document.getElementById(e.id)
    ele.addEventListener("focus", (_) => {
      document.getElementById(e.error_id).innerHTML = ""
    })

  })

  document.getElementById("skype_id").addEventListener("focus", (_) => {
    document.getElementById("skype_id_error").innerHTML = ""
  })



  var firstName = ""
  var lastName = ""

  const fname = document.getElementById('fname')
  const lname = document.getElementById('lname')


  fname.addEventListener("input", (_) => {
    firstName = fname.value
    console.log(firstName)
    document.getElementById('pname').value = firstName + " " + lastName
  })

  lname.addEventListener("input", (_) => {
    lastName = lname.value
    document.getElementById('pname').value = firstName + " " + lastName
  })
}




var employeeData = [];

var formInputs = ["fname", "lname", "email", "job_title", "office", "department", "phone_number", "skype_id"];





function addEmployee(employee) {
  employeeData.push(employee)
  const div = document.createElement("div")
  div.className = "employee"

  div.innerHTML = `<div class="a-inline employee-img">
    <img src="man128.png" width="56" height="56" >
  </div>
  <div class="a-inline"">
    <div><h4 class="margin-zero">`+ employee.fname + ` ` + employee.lname + `</h4></div>
    <div><a class="a-small">SharePoint Practice Head</a></div>
    <div><a class="a-small" >IT Department</a></div>
  </div>`;
  document.getElementById("employee-content").appendChild(div)
}






const regValidate = [
  { id: "fname", reg: "^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$", error_id: "fname_error", error_msg: "Please enter your first name" }
  , { id: "lname", reg: "^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$", error_id: "lname_error", error_msg: "please enter your last name" },
  { id: "email", reg: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$", error_id: "email_error", error_msg: "please enter a valid email address" },
  { id: "phone_number", reg: "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$", error_id: "phone_number_error", error_msg: "please enter a valid phone number" },

]

const selectValidate = [
  { id: "job_title", select_id: "job_title_select", error_msg: "please prefer a job title", error_id: "job_title_error" },
  { id: "office", select_id: "office_select", error_msg: "please prefer an office", error_id: "office_error" },
  { id: "department", select_id: "department_select", error_msg: "please prefer a department", error_id: "department_error" },
]



var filters = [{
  id: "department",
  name: "Departments",
  filter: [
    { name: "IT", count: 0 },
    { name: "Human Resources", count: 0 },
    { name: "MD", count: 0 },
    { name: "Sales", count: 0 },
  ]
}, {
  id: "offices",
  name: "Offices",
  filter: [
    { name: "India", count: 0 },
    { name: "Seattle", count: 0 },]
}, {
  id: "job_titles",
  name: "Job Titles",
  filter: [
    { name: "SharePoint Practice Head", count: 0 },
    { name: ".Net Development Lead", count: 0 },
    { name: "Recuriting Expert", count: 0 },
    { name: "BI Developer", count: 0 },
    { name: "Business Analyst", count: 0 },]
}]





function addFilters() {
  filters.forEach((filterItems) => {
    const div = document.createElement("div")
    div.className = 'department category mid-black'
    const h4 = "<h4>" + filterItems.name + "</h4>"
    const _filter = filterItems.filter
    const li = _filter.map((ele) => {
      return "<li><a>" + ele.name + " (" + ele.count + ")</a></li>"
    }).join("")

    const filterData = h4 + "<ul>" + li + "</ul>"

    div.innerHTML = filterData

    document.getElementById("filter-content").appendChild(div)



  })
}

addFilters()





function validation() {
  var flag = true;
  regValidate.forEach((e) => {
    const val = document.getElementById(e.id);
    const regx = new RegExp(e.reg)
    if (regx.test(val.value)) {
      document.getElementById(e.error_id).innerHTML = ""
    } else {
      document.getElementById(e.error_id).innerHTML = e.error_msg
      flag = false
    }
  })

  selectValidate.forEach((e) => {
    const val = document.getElementById(e.id);
    if (val.value == "") {
      document.getElementById(e.error_id).innerHTML = e.error_msg
      flag = false
    } else {
      document.getElementById(e.error_id).innerHTML = ""
    }
  })

  const skypeId = document.getElementById("skype_id")
  if (skypeId.value == "") {
    flag = false
    document.getElementById("skype_id_error").innerHTML = "please enter a valid skypeid"
  } else {
    document.getElementById("skype_id_error").innerHTML = ""
  }

  if (flag) {
    addEmployee(convertArrayToObject(formInputs))
    closeForm()
  }






}



const convertArrayToObject = (array) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item]: document.getElementById(item).value,
    };
  }, initialValue);
};
