
$(document).ready(function(){
    
    $(".capsules").hide();
    $(".rockets").hide();

    $("#rocketDivBtn").click(function(){
        $(".rockets").show();
        $(".capsules").hide();
        $("#rocket1-tap-HereLink").click(function(){

            $.ajax({
    
                url:'https://api.spacexdata.com/v3/rockets',
                type:'GET',
                success: function(response){
    debugger                   
                        // console.log(response)
                        let data1 = response;
                        // console.log(data1);
                        let str="";
                            data1.map(item=>{
                                if(`${item.rocket_id}`=="falcon1"){
    
                                    str += `
                                        <div id="${item.rocket_id}" class="RocketInfoDiv" style="height:150px; overflow-y:scroll">
                                            <label class="rocketDetails"><b>Rocket Id :</b></label><label class="rocketDetails">${item.rocket_id}</label><br>
                                            <label class="rocketDetails"><b>Rocket Name :</b></label><label class="rocketDetails">${item.rocket_name}</label><br>
                                            <label class="rocketDetails"><b>Description :</b></label><label class="rocketDetails">${item.description}</label><br>
                                            <label class="rocketDetails"><b>Visit the website </b></label><a class="rocketDetails wikipedia" href="${item.wikipedia}" target="_blank">${item.wikipedia}</span></a><br>
                                        </div>`;
                                }
                        });
                        
                        $("#card1-data").html(str);
                        $(".rocketDetails").css("color","white");
                        $(".RocketInfoDiv").css("margin-top","20px");
                        $(".RocketInfoDiv").css("padding","10px");
                        $(".RocketInfoDiv").css("border","1px solid whitesmoke");  
                        $(".rocketDetails").css("line-height","25px");
                        $(".rocketDetails").css("font-size","14px");
                        $(".wikipedia").css("font-size","11px")
                        $(".wikipedia").on(
                            {
                                mouseenter: function(){
                                    $(this).css("color","red");
                                },
                                mouseleave: function(){
                                    $(this).css("color","white");
                                }
                            });
                },
                error: function(error){
                    console.log("Error ",error);
                }
            })
        })
    
        $("#rocket2-tap-HereLink").click(function(){
    
            $.ajax({
    
                url: 'https://api.spacexdata.com/v3/rockets',
                type:'GET',
                success: function(response){
                debugger                   
                        console.log(response)
                        let data2 = response;
                        console.log(data2);
                        let str="";
                        data2.map(item=>{
                            if(`${item.rocket_id}`=="falcon9"){
                                str += `
                                    <div id="${item.id}" class="RocketInfoDiv" style="height:150px; overflow-y:scroll">
                                        <label class="rocketDetails"><b>Rocket Id :</b></label><label class="rocketDetails">${item.rocket_id}</label><br>
                                        <label class="rocketDetails"><b>Rocket Name :</b></label><label class="rocketDetails">${item.rocket_name}</label><br>
                                        <label class="rocketDetails"><b>Description :</b></label><label class="rocketDetails">${item.description}</label><br>
                                        <label class="rocketDetails"><b>Visit the website </b></label><a class="rocketDetails wikipedia" href="${item.wikipedia}" target="_blank">${item.wikipedia}</span></a><br>
                                    </div>             
                                `;
                            }
                        });
                        $("#card2-data").html(str);
                        $(".rocketDetails").css("color","rgba(245, 245, 245, 0.911)");
                        $(".RocketInfoDiv").css("margin-top","20px");
                        $(".RocketInfoDiv").css("padding","10px");
                        $(".RocketInfoDiv").css("border","1px solid whitesmoke");
                        $(".rocketDetails").css("line-height","25px");
                        $(".rocketDetails").css("font-size","14px");
                        $(".wikipedia").css("font-size","11px")
                        $(".wikipedia").on(
                        {
                            mouseenter: function(){
                                $(this).css("color","red");
                            },
                            mouseleave: function(){
                                $(this).css("color","white");
                            }
                        });
                },
                error: function(error){
                    console.log("Error ",error);
                }
            })
        })
    
        $("#rocket3-tap-HereLink").click(function(){
    
            $.ajax({
    
                url: 'https://api.spacexdata.com/v3/rockets',
                type:'GET',
                success: function(response){
                debugger                   
                        console.log(response)
                        let data3 = response;
                        console.log(data3);
                        let str="";
                        data3.map(item=>{
                            if(`${item.rocket_id}`=="falconheavy"){
                                str += `
                                <div id="${item.id}" class="RocketInfoDiv" style="height:150px; overflow-y:scroll">
                                    <label class="rocketDetails"><b>Rocket Id :</b></label><label class="rocketDetails">${item.rocket_id}</label><br>
                                    <label class="rocketDetails"><b>Rocket Name :</b></label><label class="rocketDetails">${item.rocket_name}</label><br>
                                    <label class="rocketDetails"><b>Description :</b></label><label class="rocketDetails">${item.description}</label><br>
                                    <label class="rocketDetails"><b>Visit the website </b></label><a class="rocketDetails wikipedia" href="${item.wikipedia}" target="_blank">${item.wikipedia}</span></a><br>
                                </div>             
                            `;
                        }
                    });
                    $("#card3-data").html(str);
                    $(".rocketDetails").css("color","rgba(245, 245, 245, 0.911)");
                    $(".RocketInfoDiv").css("margin-top","20px");
                    $(".RocketInfoDiv").css("padding","10px");
                    $(".RocketInfoDiv").css("border","1px solid whitesmoke");                
                    $(".rocketDetails").css("line-height","25px");
                    $(".rocketDetails").css("font-size","14px");
                    $(".wikipedia").css("font-size","11px")
                    $(".wikipedia").on({
                            mouseenter: function(){
                                $(this).css("color","red");
                            },
                            mouseleave: function(){
                                $(this).css("color","white");
                            }
                        });
                },
                error: function(error){
                    console.log("Error ",error);
                }
            });
        });
    
        $("#rocket4-tap-HereLink").click(function(){
            $.ajax({
    
                url: 'https://api.spacexdata.com/v3/rockets',
                type:'GET',
                success: function(response){
                debugger                   
                        console.log(response)
                        let data4 = response;
                        console.log(data4);
                        let str="";
                        data4.map(item=>{
                            if(`${item.rocket_id}`=="starship"){
                                str += `
                                <div id="${item.id}" class="RocketInfoDiv" style="height:150px; overflow-y:scroll">
                                    <label class="rocketDetails"><b>Rocket Id :</b></label><label class="rocketDetails">${item.rocket_id}</label><br>
                                    <label class="rocketDetails"><b>Rocket Name :</b></label><label class="rocketDetails">${item.rocket_name}</label><br>
                                    <label class="rocketDetails"><b>Description :</b></label><label class="rocketDetails">${item.description}</label><br>
                                    <label class="rocketDetails"><b>Visit the website </b></label><a class="rocketDetails wikipedia" href="${item.wikipedia}" target="_blank">${item.wikipedia}</span></a><br>
                                </div>             
                            `;
                        }
                    });
                    $("#card4-data").html(str);
                    $(".rocketDetails").css("color","rgba(245, 245, 245, 0.911)");
                    $(".RocketInfoDiv").css("margin-top","20px");
                    $(".RocketInfoDiv").css("padding","10px");
                    $(".RocketInfoDiv").css("border","1px solid whitesmoke");                
                    $(".rocketDetails").css("line-height","25px");
                    $(".rocketDetails").css("font-size","14px");
                    $(".wikipedia").css("font-size","11px")
                    $(".wikipedia").on({
                            mouseenter: function(){
                                $(this).css("color","red");
                            },
                            mouseleave: function(){
                                $(this).css("color","white");
                            }
                        });
                },
                error: function(error){
                    console.log("Error ",error);
                }
            });
        });
    })


    $("#capsulesDivBtn").click(function(){
        $(".capsules").show();
        $(".rockets").hide();
        debugger
        $("#capsule1-tap-HereLink").click(function(){
            debugger;
            $.ajax({
    
                url: 'https://api.spacexdata.com/v3/capsules',
                type:'GET',
                success: function(response){
                debugger                   
                        console.log(response)
                        let data1 = response;
                        console.log(data1);
                        let str="";
                        data1.map(item=>{
                            if(`${item.capsule_id}`=="dragon1"){
                                str += `
                                <div id="${item.capsule_serial}" class="CapsulesInfoDiv">
                                    <label class="capsuleDetails"><b>Capsule Serial No :</b></label><label class="capsuleDetails">${item.capsule_serial}</label><br>
                                    <label class="capsuleDetails"><b>Capsule Name :</b></label><label class="capsuleDetails">${item.missions.name}</label><br>
                                    <label class="capsuleDetails"><b>Details :</b></label><label class="capsuleDetails">${item.details}</label><br>
                                </div>             
                            `;
                        }
                    });
                    $("#capsule-card1-data").css("border","1px solid whitesmoke");
                    $("#capsule-card1-data").css("overflow-y","scroll");
                    $("#capsule-card1-data").html(str);
                    $(".capsuleDetails").css("color","rgba(245, 245, 245, 0.911)");
                    $(".CapsulesInfoDiv").css("margin-top","20px");
                    $(".CapsulesInfoDiv").css("padding","10px");
                    // $(".CapsulesInfoDiv").css("border","1px solid whitesmoke");                
                    $(".capsuleDetails").css("line-height","25px");
                    $(".capsuleDetails").css("font-size","12px");
                },
                error: function(error){
                    console.log("Error ",error);
                }
            });
        });
    });

    $("#capsule2-tap-HereLink").click(function(){
        $.ajax({

            url: 'https://api.spacexdata.com/v3/capsules',
            type:'GET',
            success: function(response){
            debugger                   
                    console.log(response)
                    let data2 = response;
                    console.log(data2);
                    let str="";
                    data2.map(item=>{
                        if(`${item.capsule_id}`=="dragon2"){
                            str += `
                            <div id="${item.capsule_id}" class="CapsulesInfoDiv">
                                <label class="capsuleDetails"><b>Capsule Serial No :</b></label><label class="capsuleDetails">${item.capsule_serial}</label><br>
                                <label class="capsuleDetails"><b>Capsule Name :</b></label><label class="capsuleDetails">${item.missions?.[0]?.name ? item.missions?.[0]?.name : " Data Not Avalable"}</label><br>
                                <label class="capsuleDetails"><b>Details :</b></label><label class="capsuleDetails">${item.details}</label><br>
                            </div>             
                        `;
                    }
                });
                $("#capsule-card2-data").css("border","1px solid whitesmoke");
                $("#capsule-card2-data").css("overflow-y","scroll");
                $("#capsule-card2-data").html(str);
                $(".capsuleDetails").css("color","rgba(245, 245, 245, 0.911)");
                $(".CapsulesInfoDiv").css("margin-top","20px");
                $(".CapsulesInfoDiv").css("padding","10px");
                $(".capsuleDetails").css("line-height","25px");
                $(".capsuleDetails").css("font-size","13px");
            },
            error: function(error){
                console.log("Error ",error);
            }
        });
    });
});

    



