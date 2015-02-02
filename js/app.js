
var firstNameInput = document.querySelector(".first-name-input");
var lastNameInput = document.querySelector(".last-name-input");
var emailInput = document.querySelector(".email-input");
var formInput = document.querySelector(".user-form");
var userUl= document.querySelector(".users");
var userContainer = document.querySelector(".user-container");
var userLi = document.querySelector(".user-li");

var removeButton = document.querySelector(".remove-button");

// var myLi = document.querySelector(".user-class");
var userStore = ObjectStore();
var userArray =  userStore.query();


formInput.addEventListener('submit', function(e){
  e.stopPropagation();
  e.preventDefault();
  addNewUser();
});

userUl.addEventListener('click', function(e){
    // If it was a list item
    if (e.target && e.target.nodeName == "BUTTON"){
      removeUser();
    }
});

// document.getElementById("parent-list").addEventListener("click", function(e) {
//   // e.target is the clicked element!
//   // If it was a list item
//   if(e.target && e.target.nodeName == "LI") {
//     // List item found!  Output the ID!
//     console.log("List item ", e.target.id.replace("post-"), " was clicked!");
//   }
// });



function addNewUser() {

  var newUser = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
  };

  userStore.add(User(newUser));

  // var myLi = document.createElement('li');
  // myLi.className = myLi.className + "user-li";
  // userUl.appendChild(myLi);

//   var liHTML = "";
//
//   for (var i = 0; i < userArray.length; ++i ) {
//  liHTML += "<li class='user-li slideLeft'>" + '<span class="user-li-fn">' + userArray[i].firstName + '</span>' + " " + '<span class="user-li-ln">' + userArray[i].lastName + '</span>' + " " + '<span class="user-li-email">' + userArray[i].email + '</span>' + "<button class='remove-button'>X</button>" + " " + "</li>";
//   }
//
//   liHTML.concat(liHTML);
//   userUl.innerHTML = liHTML;
//   // console.log(userStore.query());

  var liHTML = "";

  for (var i = 0; i < userArray.length; ++i ) {
 liHTML = '<span class="user-li-fn">' + userArray[i].firstName + '</span>' + " " + '<span class="user-li-ln">' + userArray[i].lastName + '</span>' + " " + '<span class="user-li-email">' + userArray[i].email + '</span>' + "<button class='remove-button'>X</button>";
  }
  var myLi = document.createElement('li');
  myLi.className = myLi.className + "user-li slideLeft";
  userUl.appendChild(myLi);
  liHTML.concat(liHTML);
  myLi.innerHTML = liHTML;

  // sets values back to empty in the inputs
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  // console.log(userStore.query());

};



function removeUser() {
    // var userLi = document.querySelectorAll(".user-li");
    var userLi = document.querySelector(".user-li");
    // for (var i=0; i<userLi.length; ++i){
    userLi.parentNode.removeChild(userLi);

    // userStore.remove(userArray[i]);

//   var userLi = this.parentNode;
// //Remove the parent list item from the ul
//   userUl.removeChild(userLi);
//   var elem = document.getElementById('id');
}
