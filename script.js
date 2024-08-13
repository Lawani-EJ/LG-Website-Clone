function ValidateForm() {
    const emailaddress = document.getElementById('email').value;
    const passwordcheck = document.getElementById('password').value;
    const passwordcheck2 = document.getElementById('password2').value;
    
    const emailerrormessage = document.getElementById('emailError');
    const passworderrormessage = document.getElementById('passwordError');
    const passwordcheckerrormessage = document.getElementById('confirmPasswordError');

    emailerrormessage.textContent = "";
    passworderrormessage.textContent = "";
    passwordcheckerrormessage.textContent = "";

    let isValid = true;

    
    if (!/^\S+@\S+\.\S+$/.test(emailaddress)) {
        emailerrormessage.textContent = "Please enter a valid email address";
        emailerrormessage.style.display = 'block'; 
        isValid = false;
    }

    
    if (passwordcheck == "" || passwordcheck.length < 8) {
        passworderrormessage.textContent = "Password must be at least 8 characters long";
        passworderrormessage.style.display = 'block'; 
        isValid = false;
    }

    
    if (passwordcheck !== passwordcheck2) {
        passwordcheckerrormessage.textContent = "Passwords do not match";
        passwordcheckerrormessage.style.display = 'block'; 
        isValid = false;
    }

    return isValid;
}
