
var firstNameInput = document.querySelector(".first-name-input");
var lastNameInput = document.querySelector(".last-name-input");
var emailInput = document.querySelector(".email-input");
var formInput = document.querySelector(".user-form");
var userUl= document.querySelector(".users");
var userContainer = document.querySelector(".user-container");

var removeButton = document.querySelector(".remove-button");

var myLi = document.querySelector(".user-class");
var userStore = ObjectStore();
var userArray =  userStore.query();




formInput.addEventListener('submit', function(e){
  e.stopPropagation();
  e.preventDefault();
  addNewUser();
});

removeButton.addEventListener('click', function(){
   removeUser();
});




function addNewUser() {

  var newUser = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value
  };

  userStore.add(User(newUser));
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";

  var liHTML = "";

  for (var i = 0; i < userArray.length; ++i ) {
 liHTML += "<li class='user-class'>" + userArray[i].firstName + " " + userArray[i].lastName + " " + userArray[i].email + "<button class='remove-button'>x</button>" + "</li>";
  }

  liHTML.concat(liHTML);
  userUl.innerHTML = liHTML;
  // console.log(userStore.query());
};


function removeUser() {
  userStore.remove(newUser);
}
