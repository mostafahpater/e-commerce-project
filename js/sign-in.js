var names = document.getElementById("name");
var pass = document.getElementById("pass");
var email = document.getElementById("email");
var form = document.getElementsByTagName("form")[0];
var wrong = document.getElementById("wrong")
 function login() {
  var gtter = JSON.parse(localStorage.getItem("table"));
  for (var i = 0; i < gtter.length; i++) {
    if (gtter[i].name == names.value && gtter[i].password == pass.value) {
      form.setAttribute("action", "index.html");
      localStorage.setItem("namehtml", `Hello ${names.value}`);
      break;
    } else if(i == gtter.length-1){
          alert("invalid username password")
    }
  }
}
var acc = document.getElementById("acc");
var logout = document.getElementById("logout");
function loadding() {
  var loc = localStorage.getItem("namehtml");
  //content
  if (localStorage.getItem("namehtml")) {
    acc.innerText = loc;
  } else {
    acc.innerText = "Sign In/Up";
  }
  
  if (acc.textContent.includes("Hello") == true) {
    acc.setAttribute("href", "index.html");
  }else{
    logout.remove();
  }
  
}

function logot() {
  localStorage.removeItem("namehtml")
}