// Import the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth,  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgxzpIUDIFCJbB4Jq0NddmPZPOYMHfn1E",
  authDomain: "login-form-5953f.firebaseapp.com",
  projectId: "login-form-5953f",
  storageBucket: "login-form-5953f.appspot.com",
  messagingSenderId: "691715722221",
  appId: "1:691715722221:web:a5463d2fbe0c39c106f5e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById('submitLogin');
    if (loginButton) {
        loginButton.addEventListener('click', (event) => {
            event.preventDefault();

            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value.trim();

            if (!email || !password) {
                alert("Fill in all fields");
                return;
            }

            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Successfully signed in");
                window.location.href = './index.html';
            })
            .catch((error) => {
                if (error.code === 'auth/wrong-password') {
                    alert("Incorrect password");
                } else if (error.code === 'auth/user-not-found') {
                    alert("User not found");
                } else {
                    alert("Unable to sign in");
                }
                console.error("Error: ", error);
            });
        });
    }
});
