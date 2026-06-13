const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const email =
document.getElementById("loginEmail").value;

const password =
document.getElementById("loginPassword").value;

if(
email === "" ||
password === ""
){

alert(
"Please fill all fields."
);

return;
}

alert(
"Login Successful!"
);

});
}

const signupForm =
document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const name =
document.getElementById("signupName").value;

const email =
document.getElementById("signupEmail").value;

const password =
document.getElementById("signupPassword").value;

if(
name === "" ||
email === "" ||
password === ""
){

alert(
"Please fill all fields."
);

return;
}

if(password.length < 6){

alert(
"Password must be at least 6 characters."
);

return;
}

alert(
"Account Created Successfully!"
);

});
}