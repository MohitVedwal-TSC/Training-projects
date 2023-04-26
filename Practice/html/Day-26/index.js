let submitDetails;
$(document).ready(function () {

        $("#personalDetailForm").on("submit", function (e) {
                // debugger;
            e.preventDefault();
            let formData = $(this).serialize();
            console.log("Formdata",formData);
            $.ajax({
                url: "http://13.126.253.245:9010/api/users/profile",
                type: "POST",
                data: formData,
                success: function (response) {
                    submitDetails = response;
                    console.log('submitDetails', submitDetails); 
                    Swal.fire(
                        'Congratulations!',
                        'New user added!'
                    )
                    $("#headingRow").siblings().html("");
                    getData(); 
                },
                error: function (error) {
                    console.log(error);
                    // Swal.fire({
                    //     icon: 'error',
                    //     title: 'Oops...',
                    //     text: 'User already existed',
                    //     footer: '<p>Add new user</p>'
                    // })
                }  
            });
            
        });

        getData();
        function getData(){
            $.ajax({
                url:"http://13.126.253.245:9010/api/users/list",
                type:"GET",
                success: function(response){
                    // debugger;
                    let myData=""
                    // let newData=response.data.filter((item)=>item.status=="Active"); 
                
                    response.data.map(item=>{
                        myData= `
                            <tr class="row_${item._id}" id="row_${item._id}" draggable="true" ondragstart="dragStart()" ondrop="drop(event)" ondragover="allowDrop(event)">
                                <td>${item.first_name}</td>
                                <td>${item.last_name}</td>
                                <td id="email_">${item.email}</td>
                                <td>${item.phone}</td>
                                <td><button type="button" data-id=${item._id} data-email=${item.email} id="editDetails_${item._id}">Edit</button></td>
                                <td><button type="button" data-id=${item.email} id="deleteDetails_${item._id}">Delete</button></td>
                            </tr>`;
                        $("#tableBody").append(myData);
                    });   
                },
                error: function(error){
                    console.log(error);
                }
            }); 
        }
 
        setTimeout(()=>{
            $("button[id^=deleteDetails_]").on("click",function(e){
                e.preventDefault()
                debugger
                let emailId=$(this).attr("data-id")
                let emailObj = {
                                    email:emailId  
                               }
                $.ajax({
                    url:"http://13.126.253.245:9010/api/users/profile/delete",
                    type:"DELETE",
                    data: emailObj,
                    success: function(response){
                        debugger
                        console.log(response.message);
                        // Swal.fire({
                        //     title: 'Are you sure?',
                        //     text: "You won't be able to revert this!",
                        //     icon: 'warning',
                        //     showCancelButton: true,
                        //     confirmButtonColor: '#3085d6',
                        //     cancelButtonColor: '#d33',
                        //     confirmButtonText: 'Yes, delete it!'
                        //   }).then((result) => {
                        //     if (result.isConfirmed) {
                        //       Swal.fire(
                        //         'Deleted!',
                        //         `User has been deleted.`,
                        //         'success'
                        //       )
                        //     }
                        // })
                        $("#headingRow").siblings().html("");
                        getData(); 
                    },
                    error:function(error){
                        console.log(error);
                    }
                })
            });
        },1000);

        setTimeout(()=>{
            $("button[id^=editDetails_]").on("click",function(){
                let dataId = $(this).attr("data-id");
                getVal(dataId);
            });
        },1000);
        
        function getVal(id) {
            $.ajax(
                {
                    url : "http://13.126.253.245:9010/api/users/profile?id="+id ,
                    type : "GET" ,
                    success : function(response){
                        console.log(response.data);
                        $('#fNameInput').val(response.data.first_name);
                        $('#lNameInput').val(response.data.last_name);
                        $('#emailInput').val(response.data.email);
                        $('#contactInput').val(response.data.phone);
                    },
                    error: function(error){
                        console.log(error);
                    }
                }
            );
        }

        $("#updateBtn").click(function(){
            // alert("fsgd");
            let emailId=$("button[id^=editDetails_]").attr("data-email")
                let emailObj = {    
                                    "first_name":$('#fNameInput').val(),
                                    "last_name":$('#lNameInput').val(),
                                    "email":emailId,
                                    "phone":$('#contactInput').val()
                               };
                $.ajax({
                        url:"http://13.126.253.245:9010/api/users/update/profile",
                        type:"PUT",
                        data: emailObj,
                        success: function(response){
                            console.log(response.message);
                            Swal.fire(
                                'User details updated!'
                            )
                            $("#headingRow").siblings().html("");
                            getData(); 
                        },
                        error: function(error){
                            console.log(error);
                        }
                    });
        });


    $("#personalDetailForm").validate({
        rules:{
            first_name:'required',
            last_name:'required',
            email:'required',
            phone:'required',
        },
        messages:{
            first_name:'This field is required',
            last_name:'This field is reequired',
            email:'This field is required',
            phone:'This field is required'
        }
    });
});

let currentDiv;
function dragStart(){
    currentDiv = event.target;
    console.log(currentDiv);
}

function drop(){  
    event.preventDefault();
    event.target.parentNode.before(currentDiv);
}

function allowDrop(ev) {
    ev.preventDefault();
}
