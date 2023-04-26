/************Address Div section***************/ 

let count=0;
$(document).ready(function(){

    $("#address-btn").click(function(){
        count++;
        let newInputDiv = `<div class="appendedDiv">
                            <input type="text" class="registrationInput form-inputs" id="addressField_${count}" placeholder="Address Line ${count+1}">
                            <button type="button" class="address-btn" id="removeAddress-btn_${count}" countValue = "${count}">-</button>
                            </div>     
                          `;
        $(".address-div").append(newInputDiv);
        $(".appendedDiv").css("padding","20px 0px 0px 97px");
        $("input[id^=addressField_]").css("width","22.8vw");
    });
    $(".registrationInput").on({
        mouseenter: function(){
            $(this).css("background-color","lightgrey");
        },
        mouseleave: function(){
            $(this).css("background-color","white");
        },
        click: function(){
            $(this).css("background-color","darkgrey") ;       
        }
    });
    $("input[id^=addressField_]").on({
        mouseenter: function(){
            $(this).css("background-color","lightgrey");
        },
        mouseleave: function(){
            $(this).css("background-color","white");
        },
        click: function(){
            $(this).css("background-color","darkgrey");   
        }
    });
});

$(document).click(function(){
    $("button[id^=removeAddress-btn_]").click(function(){
        let id = $(this).attr("countValue");
        $(this).parent().remove();
        count=0;    
    });
});


/************form navigation section*************/ 

let counter = 0;
$(document).ready(function(){
    if(counter==0){
        $(".second-form").hide();
    }
});

function checkValidation(className){
    debugger;
    let validationCheck = 0;
    $(`${className}`).each(function(){
        debugger;
        if($(this).siblings().hasClass("validationMsg")){
            $(this).siblings("p").remove()
        }
        if($(this).val() == ""){
            let error = `<p class="validationMsg">Required Field!</p>`;
            $(this).parent().append(error);
            $(".validationMsg").css("color","red");
            $(".validationMsg").css("text-align","center");
            validationCheck=0;
        } 
        else{
            validationCheck++;
        }       
    });
    return validationCheck > 0 ? true:false;
}

$(document).ready(function(){
    $("#form1-nextBtn").click(function(){
        debugger;
        if(checkValidation(".form1-input")){
            counter++;   
        }
           
        if(counter==1){
            $(".first-form").hide();
            $(".second-form").show();
        }     
    });
    $("#form2-nextBtn").click(function(){
        debugger;

        if(checkValidation(".form2-input")){
            counter++;
        }
        if(counter==2){
            $(".first-form").show();
            $("#form1-nextBtn").hide();
            $("#form2-nextBtn").html("Save");
        }
    });
});
       

$(document).ready(function(){
    $("#form2-prevBtn").click(function(){
        $(".first-form").show();
        $(".second-form").hide();
    });
});


/**********************Validations***********************/

let languageArr = [
                      {
                        English : {
                                    StudentForm:"Student Registration Form",
                                    FirstName:"First Name",
                                    LastName:"Last Name",
                                    Dob:"Date of Birth",
                                    EmailId:"Email Id",
                                    Gender:"Gender",
                                    Male:"Male",
                                    Female:"Female",
                                    "Next":"Next",
                                    "Address":"Address",
                                    "City":"City",
                                    "State":"State",
                                    "Pin":"Pin Code",
                                    "Contact":"Contact No"
                                  },
                        Hindi : {
                                    "StudentForm":"छात्र पंजीकरण फॉर्म",
                                    "First-Name":"पहला नाम",
                                    "Last-Name":"उपनाम",
                                    "Dob":"जन्म की तारीख",
                                    "EmailId":"ईमेल आईडी",
                                    "Gender":"लिंग",
                                    "Male":"पुस्र्ष",
                                    "Female":"महिला",
                                    "Next":"आगे बढ़ें",
                                    "Address":"पता",
                                    "City":"शहर",
                                    "State":"राज्य",
                                    "Pin":"पिन कोड",
                                    "Contact":"संपर्क संख्या "
                                }
                      }
                ] 

$(document).ready(function(){
    $("#languageDropdown").on("change",function(){
        debugger
        if($("#languageDropdown").val()=="Hindi"){
            window.location.href="hindiForm.html";
        }
        else if($("#languageDropdown").val()=="English"){
            window.location.href="index.html";
        }
    })
})