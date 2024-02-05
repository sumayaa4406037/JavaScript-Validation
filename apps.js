function validateForm() {
    let a = document.forms["myForm"]["fname"].value;
    let b= document.forms["myForm"]["email"].value;
    let c = document.forms["myForm"]["mobile"].value;
    let d = document.forms["myForm"]["password"].value;
    let e = document.forms["myForm"]["cpassword"].value;
    if (a == "") {
      document.getElementById("error_n").innerHTML="Name is required!";
      return false;
    }else if(b == ""){
      document.getElementById("error_e").innerHTML="Email is required!";
      return false;
    }else if(c == ""){
      document.getElementById("error_m").innerHTML="Mobile is required!";
      return false;
    }else if(d == ""){
      document.getElementById("error_p").innerHTML="Password is required!";
      return false;
    }else if(e == ""){
      document.getElementById("error_c").innerHTML="Confirm_password is required!";
      return false;
    }else{
       alert("successfull");
    }
  }