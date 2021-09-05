let input1=document.querySelector("#email");
let input2=document.querySelector("#pass");
let btn=document.querySelector("#btn");

btn.addEventListener("click",function(){
    if(input1.value=="" && input2.value==""){
        alert("email & password is compulsory");
    }else if(input1.value==""){
        alert("email is required");
    }else if(input2.value==""){
        alert("password is required");
    }else{
        alert("login successfully");
    }
})