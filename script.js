function validationForm(){
   
    let username=document.querySelector("#username").value;
    let password=document.querySelector("#password").value;
    if(username ==" "){
        document.querySelector("err").innerHTML="**must be required to fill  the all fields**"
        return false;
    }
    if(password ==""){
        document.querySelector("err").innerHTML="**must be required to fill  the all fields**"
        return false;
    }
    if(username !="pooja001"){
        document.querySelector("err").innerHTML="**please enter valid username**"
        return false;
    }
    if(password !="maurya@2001"){
        document.querySelector("err").innerHTML="**please enter valid password**"
        return false;
    }
        
        document.querySelector("err").innerHTML="Welcome"
  
}



