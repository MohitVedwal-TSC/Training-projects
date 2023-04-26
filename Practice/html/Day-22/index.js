let step1_form = document.getElementById("step1");
let step2_form = document.getElementById("step2");
let step3_form = document.getElementById("step3");
step1_form.style.display="block";
step2_form.style.display = "none";
step3_form.style.display = "none";

let step2Input = document.getElementsByClassName("step2-input");

let prevBtn = document.getElementById("prevbtn");
let nextBtn = document.getElementById("nextbtn");

let addressInput = document.getElementsByClassName("addressInput");

let validationDiv = document.getElementById("validationMsg");


////////////////////////////General Details Field//////////////////////////

let namE = document.getElementById("nameInput");
let age = document.getElementById("ageInput");
let gender = document.getElementById("genderInput");
let email = document.getElementById("emailInput");
let contact = document.getElementById("contactInput");
let count = 0;


prevBtn.style.display = "none";
function moveForward() {
    debugger
    count++;    
    if (count == 1) {
        step1_form.style.display = "none";
        step2_form.style.display = "block";
        prevBtn.style.display = "block";
        nextBtn.style.display = "block"; 
        document.getElementById("educationBtn").style.display="block";
        document.getElementById("experience-btn").style.display="block";
    }

    else if (count==2) {
        step2_form.style.display = "none";
        step3_form.style.display = "block";
        nextBtn.innerHTML="Submit";
    }

    else if(count==3){
        step1_form.style.display = "block";
        step2_form.style.display = "block";
        step3_form.style.display = "block";
        nextBtn.innerHTML = "Save";
        document.getElementById("educationBtn").style.display="none";
        document.getElementById("experience-btn").style.display="none";
        document.getElementById("step3Add-btn").style.display="none";
    }
    else{
        getData();
    }
}

function movePrevious(){
    count--;
    if(count==2){
        step3_form.style.display="block";
        step2_form.style.display="none";
        step1_form.style.display="none";
    }

    else if (count==1) {
        step3_form.style.display = "none";
        step2_form.style.display = "block";
        nextBtn.innerHTML="Next";
    }
    else if (count==0) {
        step2_form.style.display = "none";
        step1_form.style.display = "block";
        prevBtn.style.display="none";
    }
}


function validationFunc() {
    let stepInput;
    let steps_input;
    let temp = 0;
    debugger;
    if(count == 0){
        steps_input = document.getElementsByClassName("input1");
        stepInput = document.getElementsByClassName("step1Input");
    }
    else if(count == 1){
        steps_input = document.getElementsByClassName("input2");
        stepInput = document.getElementsByClassName("step2Input")
    }
    else if(count == 2){
        steps_input = document.getElementsByClassName("input3");
        stepInput = document.getElementsByClassName("step3Input");
    }
    else if(count == 3){
        steps_input = document.getElementsByClassName("inputs");
        stepInput = document.getElementsByClassName("steps");
    }

    for (let i=0; i<steps_input.length; i++) {
        debugger;
        if (stepInput[i].getElementsByTagName("p").length != 0) {
            stepInput[i].querySelector("p").remove();
        }

        if (steps_input[i]) {
            if(steps_input[i].value==""){
                let error1 = document.createElement("p")
                error1.innerText = "Please fill the details"
                error1.style.color = "red";
                error1.style.textAlign="center"
                stepInput[i].appendChild(error1);
            }
            else{
                temp++;
            }
        }
    }
    if(temp==steps_input.length)
        moveForward();
}


////////////////////////Education Field//////////////////////////

let tBody = document.getElementById("tbody");
let educationDetailsArray = [];
function addEducation() {
    // debugger

    let drop_Down = `
                        <td><div class="steps"><input type="text" class="dropDown-input education-type inputs" placeholder="Education Type"</td>
                        <td><div class="steps"><input type="text" class="dropDown-input inputs" placeholder="School name" name="College_name"></div></td>
                        <td><div class="steps"><input type="text" class="dropDown-input inputs" placeholder="Passing year" name="College_passing_year"></div></td>
                        <td><div class="steps"><input type="text" class="dropDown-input inputs" placeholder="Degree name" name="College_degree_name"></div></td> 
                    `;

    let new_row = document.createElement("tr");
    new_row.setAttribute("class","manual_entries") 
    new_row.innerHTML = drop_Down;
    tBody.appendChild(new_row);
}

function removeEducation(){
    tBody.querySelector(".manual_entries").remove(tBody.lastChild);
}


//////////////////////// Experience fields//////////////////////////// 


let experience = document.getElementById("company");
function addMoreProfile() {

    let addField = `<div class = "company" id="company">
                        <div class="company-name">
                            <div class="label c-label">
                                <label>Company Name:</label>
                            </div>
                            <div class="step2Input steps">
                                <input type="text" class="company-input step2-input input2 inputs" id="c-name" placeholder="Company name" name="company_name">
                            </div>
                        </div>
                        <div class="date step2Input steps" id="startDate">
                            <label>Start Date:</label><input type="date" class="dateInput step2-input input2 inputs" name="start_date">
                        </div>
                        <div class="date step2Input steps" id="endDate">
                            <label>End Date:</label><input type="date" class="dateInput step2-input input2 inputs" name="end_date">
                        </div>
                        <div class="designation" id="designation">
                            <div class="label">
                                <label>Designation:</label>
                            </div>
                            <div class="step2Input steps">
                                <input type="text" class="designation-input step2-input input2 inputs" id="designation-input" placeholder="Enter your designation" name="designation">
                            </div>
                        </div>
                    </div>`;

    let input = document.createElement("div");
    input.setAttribute("class", "new-education-field");
    input.innerHTML = addField;
    experience.appendChild(input);
}

function removeProfile() {
    experience.querySelector(".new-education-field").remove(experience.lastChild)
}


/////////////////////////////Skills Field//////////////////////////


let counter = 0;
function addSkill(countStart){
    counter++;
    let skill_input=document.getElementById("skillInput");
    let addedSkillDiv=document.getElementById("addedSkillDiv");

    if(skill_input.value!=""){
        debugger
        let list=document.createElement("li");
        list.setAttribute("class","list_data");

        list.setAttribute("name",`Skill_${counter}`);
        addedSkillDiv.style.display="block";
        list.innerText=skill_input.value;
        addedSkillDiv.querySelector("ul").append(list);
        skill_input.value = "";
    }  
}
// const form=document.querySelector('form');
let listData = document.getElementById("listData");
const data = {};
const formData = [];
function getData() {
    debugger
     const inputs = document.querySelectorAll('input');  
     inputs.forEach(input => { 
        data[input.name] = input.value; 
    }); 
     const textArea = document.querySelectorAll('textarea');
        textArea.forEach(textarea => {
            data[textarea.name] = textarea.value;
    }); 
     const para = document.querySelectorAll('#listData li');
     console.log('para', para);
     para.forEach(list => {
       console.log(list);
       data[list.getAttribute('name')] = list.innerText;
     });
    //  localStorage.setItem(data,JSON);
    formData.push(data);
    console.log(formData);
    // window.location.href="display.html";
}
 









// let address = document.getElementById("addressInput_id");

// function addInput() {
//     debugger
//     var html = ` <div class="addressInput" id="addressInput_id">
//                     <div class="input step1Input" id="addressInput">
//                         <input type="text" class="step1-input" name="address" placeholder="Address"
//                             id="address" required>
//                     </div>
//                     <div class="add-btn">
//                         <div><button type="button" class="removeField" id="prevBtn" onclick="delInput()">-</button><div>
//                     </div>
//                 </div>`;

//     let input = document.createElement("div");
//     input.innerHTML = html
//     input.setAttribute("class", "value")
//     address.appendChild(input);
//     address.style.display = "block";
//     address.style.flexDirection = "column";
//     address.appendChild(input).style.marginTop = "20px"
// }

// function delInput() {
//     if (address.lastChild)
//         address.removeChild(address.lastChild);
// }
