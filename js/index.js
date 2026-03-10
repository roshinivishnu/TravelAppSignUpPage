// SHOW / HIDE PASSWORD

function togglePassword(id){

let input=document.getElementById(id);

if(input.type==="password"){
input.type="text";
}else{
input.type="password";
}

}


// SIGNUP VALIDATION

let signupForm=document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let city=document.getElementById("city").value;
let password=document.getElementById("password").value;
let confirmPassword=document.getElementById("confirmPassword").value;

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let cityPattern=/^[A-Za-z]+$/;
let passwordPattern=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

if(!emailPattern.test(email)){
alert("Invalid Email");
return;
}

if(phone.length!=10){
alert("Phone must be 10 digits");
return;
}

if(!cityPattern.test(city)){
alert("City must contain only alphabets");
return;
}

if(!passwordPattern.test(password)){
alert("Password must be 8 characters with letters and numbers");
return;
}

if(password!==confirmPassword){
alert("Passwords do not match");
return;
}

// Save data
localStorage.setItem("email",email);
localStorage.setItem("password",password);

alert("Signup Successful");

window.location.href="SignIn.html";

});

}


// SIGNIN VALIDATION

let signinForm=document.getElementById("signinForm");

if(signinForm){

signinForm.addEventListener("submit",function(e){

e.preventDefault();

let email=document.getElementById("loginEmail").value;
let password=document.getElementById("loginPassword").value;

let storedEmail=localStorage.getItem("email");
let storedPassword=localStorage.getItem("password");

if(email===storedEmail && password===storedPassword){

alert("Login Successful");

window.location.href="travelapp.html";

}else{

alert("Invalid Credentials");

}

});

}