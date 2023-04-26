
let firstform = document.getElementById("step1")
let secondform = document.getElementById("step2")
let thirdform = document.getElementById("step3")
document.getElementById("prev").style.display="none";
let count=0;

let address = document.getElementById("addressInput");
    
const moveForward = () => {
        count++;
        if (count==1)
        {
            firstform.style.display = "none";
            secondform.style.display = "block";
            document.getElementById("prev").style.display="block";
            document.getElementById("p_bar").style.width="33.33%";           
        }
        else if (count==2) {
            secondform.style.display = "none";
            thirdform.style.display = "block";
            document.getElementById("prev").style.display="block";
            document.getElementById("p_bar").style.width="66.66%";
            document.getElementById("nextbtn").innerHTML="Submit";
        }
        else if(count==3){
            firstform.style.display = "block";
            secondform.style.display = "block";
            thirdform.style.display = "block";
            document.getElementById("p_bar").style.width="100%";
            document.getElementById("prev").style.display="none";
            document.getElementById("nextbtn").innerHTML = "Save";
            // document.getElementById("nextbtn").onclick = function(){
            //     backButton()
            // };
        }
    }

const movePrevious = () => {
    count--;
    if (count==1) {
        thirdform.style.display = "none";
        secondform.style.display = "block";
        document.getElementById("p_bar").style.width="33.33%"
        document.getElementById("nextbtn").innerHTML="Next";
    }
    else if (count==0) {
        secondform.style.display = "none";
        firstform.style.display = "block";
        document.getElementById("prev").style.display="none";
        document.getElementById("p_bar").style.width="0%"
    }
}

const validationFunc = () => {

    let f_name = document.getElementById("first_name");
    let l_name = document.getElementById("last_name");
    let age = document.getElementById("age");
    let email = document.getElementById("emailId");
    let contact = document.getElementById("contact-no");
    let new_pass = document.getElementById("n_pass");
    let confirm_pass = document.getElementById("c_pass");
    let address_field = document.getElementById("address");
    let validationDiv = document.getElementById("validationMsg");
    // let step1input = document.getElementsByClassName("step1-input");

    if(count==0){
        if(f_name.value!="" && l_name.value!="" && age.value!=""){
            moveForward();
            // validationDiv.style.display = "none";
        }
        else{
            if(f_name.value == ""){
                document.getElementById("fnameInput").appendChild(validationDiv);
                validationDiv.style.display = "block";
            }
            else if(l_name.value == ""){
                document.getElementById("lnameInput").appendChild(validationDiv);
                validationDiv.style.display = "block";
            }
            else if(age.value == ""){
                document.getElementById("ageInput").appendChild(validationDiv);
                validationDiv.style.display = "block";
            }
        }
    }
    else if(count==1){
        if(email.value!="" && contact.value!="" && address_field.value!=""){
            moveForward();
            // validationDiv.style.display = "none";
        }
        else{
            if(email.value == ""){
                document.getElementById("emailInput").appendChild(validationDiv);
                validationDiv.style.display = "block";
            }
            else if(contact.value == ""){
                document.getElementById("contactInput").appendChild(validationDiv);
                validationDiv.style.display = "block";
            }
            else if(address_field.value == ""){
                document.getElementById("addressInput").appendChild(validationDiv);
                validationDiv.style.display = "block";
            }
        }
    }
    else if(count==2){
        if(new_pass.value!="" && confirm_pass.value!=""){
            moveForward();
            // validationDiv.style.display = "none";
        }
        else{
            if(new_pass.value == ""){
                document.getElementById("newPassInput").appendChild(validationDiv);
                validationDiv.style.display = "block";
            }
            else if(confirm_pass.value == ""){
                document.getElementById("confirmPassInput").appendChild(validationDiv);
                validationDiv.style.display = "block";
            }
        }
    }
}

let removePrevBtn=document.getElementById("prevBtn")
removePrevBtn.style.display="none";
let count1=0;

const addInput = () => {
    // count1++;
    let input = document.createElement("input");
    input.placeholder="Address";
    address.appendChild(input).style.marginTop="20px";
    // removePrevBtn.style.display="block";
}

const delInput = () => {
    if(address.lastChild)
    address.removeChild(address.lastChild);
}
