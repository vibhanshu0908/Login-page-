let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;

function validateFrom(){
    //username
    if(username.value.length < 5){
        document.getElementById("userError").innerHTML = "user name required min  5 characters" 
        flag = 0;
    }else{
        document.getElementById("userError").innerHTML="";
        flag=1;
    }
    //password
    if(password.value.length < 8){
        document.getElementById("passError").innerHTML="Your password must be at least 8 characters"
        flag=0;

     }
     else if(password.value.search(/[a-z]/i) < 0){
        document.getElementById("passError").innerHTML = "Your password must contain at least one letter. "
        flag=0;
     }
     else if(password.value.search(/[0-9]/) < 0){
        document.getElementById("passError").innerHTML = "Your password must contain at least one digit "
        flag=0;
     }
    
    else{
        document.getElementById("passError").innerHTML="";
        flag=1;
    }
    if(flag){
        return true;

    }else{
        return false;

    }

}