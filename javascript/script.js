var myemail = document.getElementById("my_email");
var mypassword = document.getElementById("my_password");
var login = document.getElementById("login");
var word = document.getElementById("word");
login.onclick = enter;
function enter() {
  var list = [];
  list = JSON.parse(localStorage.getItem("userdata"));
  if (validate_email(myemail.value) && validate_password(mypassword.value)) {
    for (var i = 0; i < localStorage.length; i++) {
      var ob = list[i];
      if (
        ob.youremail === myemail.value &&
        ob.yourpassword === mypassword.value
      ) {
        localStorage.setItem("objc", ob.yourname);
        console.log("user found");

        window.location.href = "index3.html";
      } else {
        word.classList.replace("d-none", "d-inline");
      }
    }
  } else {
    word.classList.replace("d-none", "d-inline");
    // window.alert("not validate");
  }
}
function validate_email(email) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]/;
  return pattern.test(email);
}
function validate_password(pass) {
  const pattern = /.{8,}/;
  return pattern.test(pass);
}
// console.log("Hi")
