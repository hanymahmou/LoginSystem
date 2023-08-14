var SignUPBtn = document.getElementById("SignUPBtn");
var SignInBtn = document.getElementById("SignInBtn");
var nameFiled = document.getElementById("nameFiled");
var emailFiled = document.getElementById("emailFiled");
var passwordFiled = document.getElementById("passwordFiled");
var title = document.getElementById("title");
var signUpUser =  document.getElementById("signUpUser");
var signInUser = document.getElementById("signInUser");


signUpUser.addEventListener("click", function(){
  signUpUser.classList.add("d-none");
  signInUser.classList.remove("d-none");
  nameInput.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  SignUPBtn.classList.add("disabled");
  SignInBtn.classList.remove("disabled");
})  

SignInBtn.addEventListener("click" , function(){
  if( emailFiled.value == ""|| passwordFiled.value == ""){
    document.getElementById("validation").innerHTML=   `please Enter All fileds`
  } else{
    chekUsers()
    ClearSignUsers() 
  }
})

function chekUsers() {
  for ( var i = 0; i < userList.length; i++){
    if(emailFiled.value == userList[i].email && passwordFiled.value == userList[i].password){
      var y = userList[i].name;
      localStorage.setItem('userName' , y);
      // break;
    }
  }
}

signInUser.addEventListener("click", function(){
  signInUser.classList.add("d-none");
  signUpUser.classList.remove("d-none");
  nameInput.style.maxHeight = "50px";
  title.innerHTML = "Sign Up";
  SignUPBtn.classList.remove("disabled");
  SignInBtn.classList.add("disabled");
  
})

SignUPBtn.onclick = function () {
  registertion();
};


var userList = [];

if(localStorage.getItem("userList") != null) {
  userList = JSON.parse(localStorage.getItem('userList'))
} else{
    userList=[];
  }


function registertion() {
  if(nameFiled.value == "" || emailFiled.value == "" ||passwordFiled.value =="" ){
   document.getElementById("validation").innerHTML=   `please Enter All fileds`

  } else{
    user = {
      name: nameFiled.value,
      email: emailFiled.value,
      password: passwordFiled.value,
    };
    userList.push(user);
   localStorage.setItem("userList", JSON.stringify(userList));
    ClearSignUsers();
  }
  }

function ClearSignUsers() {
  nameFiled.value = "";
  emailFiled.value = "";
  passwordFiled.value = "";
}

