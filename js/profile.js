const email =
localStorage.getItem("userEmail");

const name =
localStorage.getItem("userName");

if(!email){

    window.location.href="login.html";

}

document.getElementById("welcomeText").innerHTML =
"Welcome " + (name || "Student") + " 👋";

document.getElementById("userName").innerHTML =
name || "Student";

document.getElementById("userEmail").innerHTML =
email;

const saved =
JSON.parse(localStorage.getItem("savedColleges")) || [];

document.getElementById("savedCount").innerHTML =
saved.length;

const compare =
JSON.parse(localStorage.getItem("compareColleges")) || [];

document.getElementById("compareCount").innerHTML =
compare.length;

document.getElementById("backBtn")
.onclick=function(){

window.location.href="dashboard.html";

}

document.getElementById("logoutBtn")
.onclick=function(){

if(confirm("Logout from CampusFinder?")){

localStorage.clear();

window.location.href="../index.html";

}

}