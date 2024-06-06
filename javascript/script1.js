// Sign Up
var list = [];
var word = document.getElementById("word");
var your_name = document.getElementById("your_name");
var your_email = document.getElementById("your_email");
var your_password = document.getElementById("your_password");
var your_signup = document.getElementById("signup");
your_signup.onclick = add_data;
function add_data() {
  if (
    validate_email(your_email.value) &&
    validate_password(your_password.value)
  ) {
    console.log("Hello");
    var userdata = {
      yourname: your_name.value,
      youremail: your_email.value,
      yourpassword: your_password.value,
    };
    list.push(userdata);
    console.log(list);
    localStorage.setItem("userdata", JSON.stringify(list));
    reset();
    word.classList.replace("d-none", "d-inline");
  } else {
    window.alert("not Validate");
  }
}
function reset() {
  your_name.value = "";
  your_email.value = "";
  your_password.value = "";
}
function validate_email(email) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]/;
  return pattern.test(email);
}
function validate_password(pass) {
  const pattern = /.{8,}/;
  return pattern.test(pass);
}

// //
//  Login in
// var email_write=document.getElementById('email')
// var password_write=document.getElementById('password')
// var loginbtn=document.getElementById('login')
// // console.log(password_write.value)
// // var list=[];
// loginbtn.addEventListener('click',
// function(){
//   var username = {
//     emailpath: email_write.value,
//     pass: password_write.value,
//   };
//   for(var i=0;i<localStorage.length;i++)
//     {
//       if(localStorage[i].email==username.emailpath && localStorage[i].password==username.pass)
//         {
//           return true
//         }
//     }
//     return false
// }
// )
