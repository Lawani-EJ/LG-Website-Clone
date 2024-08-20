function ValidateForm() {
    const validatefirstname = document.getElementById('rfname').value;
    const validatelastname = document.getElementById('rlname').value;
    const validateemailaddress = document.getElementById('remail').value;
    const validatepasswordcheck = document.getElementById('rpassword').value;
    const validatepasswordcheck2 = document.getElementById('password2').value;
    
    const validatefirstnameerror = document.getElementById('fname-error');
    const validatelastnameerror = document.getElementById('lname-error');
    const validateemailerrormessage = document.getElementById('emailError');
    const validatepassworderrormessage = document.getElementById('passwordError');
    const validatepasswordcheckerrormessage = document.getElementById('confirmPasswordError');



    validatefirstnameerror.textContent = "";
    validatelastnameerror.textContent = ""
    validateemailerrormessage.textContent = "";
    validatepassworderrormessage.textContent = "";
    validatepasswordcheckerrormessage.textContent = "";

    let isValid = true;

    if(validatefirstname === ""){
        validatefirstnameerror.textContent = "Please enter your first name";
        validatefirstnameerror.style.display = 'block';
        isValid = false;
    }
    
    if(validatelastname === ""){
        validatelastnameerror.textContent = "Please enter your last name";
        validatelastnameerror.style.display = 'block';
        isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(validateemailaddress)) {
        validateemailerrormessage.textContent = "Please enter a valid email address";
        validateemailerrormessage.style.display = 'block'; 
        isValid = false;
    }

    
    if (validatepasswordcheck === "" || validatepasswordcheck.length < 8) {
        validatepassworderrormessage.textContent = "Password must be at least 8 characters long";
        validatepassworderrormessage.style.display = 'block'; 
        isValid = false;
    }

    
    if (validatepasswordcheck !== validatepasswordcheck2) {
        validatepasswordcheckerrormessage.textContent = "Passwords do not match";
        validatepasswordcheckerrormessage.style.display = 'block'; 
        isValid = false;
    }

    if(isValid){
        // window.location.href = "./login.html";
        handleSignupActivity(validateemailaddress, validatepasswordcheck, validatefirstname, validatelastname)
        return false;
    }

    return false; 
}

function loginvalidate(){
    const validateloginemailaddress = document.getElementById('login-email').value;
    const validateloginpassword = document.getElementById('login-password').value;

    const validateloginemailerrormessage = document.getElementById('login-emailError');
    const validateloginpassworderrormessage = document.getElementById('login-passwordError');

    validateloginemailerrormessage.textContent = "";
    validateloginpassworderrormessage.textContent = "";

    let loginIsvalid = true;

    if (validateloginemailaddress === "") {
        validateloginemailerrormessage.textContent = "Please enter a valid email address"
        validateloginemailerrormessage.style.display = "block";
        loginIsvalid = false;
    }

    if (validateloginpassword === ""){
        validateloginpassworderrormessage.textContent = "Wrong password"
        validateloginpassworderrormessage.style.display = "block"
        loginIsvalid = false;
    }

    return loginIsvalid
}