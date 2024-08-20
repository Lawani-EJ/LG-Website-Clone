// Import the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

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
const db = getFirestore(app);

//signup function
document.getElementById('submitSignUp').addEventListener('click',(event)=>{
  event.preventDefault();

  const email = document.getElementById('remail').value.trim();
  const password = document.getElementById('rpassword').value.trim();
  const firstname = document.getElementById('rfname').value.trim();
  const lastname = document.getElementById('rlname').value.trim();

  if (!email || !password || !firstname || !lastname) {
    alert("Fill in all fields")
    return;
  }

  createUserWithEmailAndPassword(auth, email,password)
  .then((userCredential) =>{
    const user = userCredential.user;
    const userData = {
      firstname: firstname,
      lastname: lastname,
      email: email
    };

    const docRef = doc(db, "users", user.uid);
    return setDoc(docRef, userData);
  })
  .then(() =>{
    alert("Account successfully created ")
    window.location.href="./login.html"
  })
  .catch((error) =>{
    if(error.code === 'auth/email-already-in-use') {
      alert("Email already exists ")
    } else {
      alert("Unable to create user")
    }
    console.error("Error: ", error)
  });
});