let obj = {
    firstName : "Hemesh",
    lastName : "Mahra",
    details : function(){
        console.log(this.firstName+" "+this.lastName);
    }
}
obj.details();