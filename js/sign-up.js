var names = document.getElementById("name");
var pass = document.getElementById("pass");
var email = document.getElementById("email");
var arrr = [];
function saves() {
  var arr = { name: names.value, password: pass.value, email: email.value };
  if (!(localStorage.getItem("table"))) {
      localStorage.setItem("table", JSON.stringify(arrr));
    } else {
        arrr = JSON.parse(localStorage.getItem("table"));
        arrr.push(arr);
    localStorage.setItem("table", JSON.stringify(arrr));
}
localStorage.setItem("namehtml",`Hello ${names.value}`)
}
function loadding() {
    var loc = localStorage.getItem("namehtml")
    acc.innerText = loc
   
}