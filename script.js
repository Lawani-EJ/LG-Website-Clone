function ValidateForm() {
    const firstname = document.getElementById('fname').value;
    const lastname = document.getElementById('lname').value;
    const emailaddress = document.getElementById('email').value;
    const passwordcheck = document.getElementById('password').value;
    const passwordcheck2 = document.getElementById('password2').value;
    
    const firstnameerror = document.getElementById('fname-error');
    const lastnameerror = document.getElementById('lname-error');
    const emailerrormessage = document.getElementById('emailError');
    const passworderrormessage = document.getElementById('passwordError');
    const passwordcheckerrormessage = document.getElementById('confirmPasswordError');



    firstnameerror.textContent = "";
    lastnameerror.textContent = ""
    emailerrormessage.textContent = "";
    passworderrormessage.textContent = "";
    passwordcheckerrormessage.textContent = "";

    let isValid = true;

    if(firstname === ""){
        firstnameerror.textContent = "Please enter your first name";
        firstnameerror.style.display = 'block';
        isValid = false;
    }
    
    if(lastname === ""){
        lastnameerror.textContent = "Please enter your last name";
        lastnameerror.style.display = 'block';
        isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(emailaddress)) {
        emailerrormessage.textContent = "Please enter a valid email address";
        emailerrormessage.style.display = 'block'; 
        isValid = false;
    }

    
    if (passwordcheck === "" || passwordcheck.length < 8) {
        passworderrormessage.textContent = "Password must be at least 8 characters long";
        passworderrormessage.style.display = 'block'; 
        isValid = false;
    }

    
    if (passwordcheck !== passwordcheck2) {
        passwordcheckerrormessage.textContent = "Passwords do not match";
        passwordcheckerrormessage.style.display = 'block'; 
        isValid = false;
    }

    window.location.href = "./login.html";
    return false; 
}

function loginvalidate(){
    const loginemailaddress = document.getElementById('login-email').value;
    const loginpassword = document.getElementById('login-password').value;

    const loginemailerrormessage = document.getElementById('login-emailError');
    const loginpassworderrormessage = document.getElementById('login-passwordError');

    loginemailerrormessage.textContent = "";
    loginpassworderrormessage.textContent = "";

    let loginIsvalid = true;

    if (loginemailaddress === "") {
        loginemailerrormessage.textContent = "Please enter a valid email address"
        loginemailerrormessage.style.display = "block";
        loginIsvalid = false;
    }

    if (loginpassword === ""){
        loginpassworderrormessage.textContent = "Wrong password"
        loginpassworderrormessage.style.display = "block"
        loginIsvalid = false;
    }

    return loginIsvalid
}