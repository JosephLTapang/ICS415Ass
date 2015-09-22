/**
 * Created by StickandJab on 9/18/2015.
 */

function getClasses(elem) {
//find class="
  var elemsClasses = elem.className;
  //split elemsClasses by " " into an array
  var arrayOfClasses = elemsClasses.split(" ");

  //add elements of array to new string with []'s and ""s
  var newString;
  for (i = 0; i < arrayOfClasses.length; i++) {

    if (i == 0 && (arrayOfClasses.length != 1)) {
      newString = "[" + "\"" + arrayOfClasses[i] + "\", ";
    }
    else if (i == 0 && (arrayOfClasses.length == 1)) {
      newString = "[" + "\"" + arrayOfClasses[i] + "\"]";
    }
    else if (i != 0 && i != arrayOfClasses.length - 1) {
      newString = newString + "\"" + arrayOfClasses[i] + "\", ";
    }
    else if (i == arrayOfClasses.length - 1) {
      newString = newString + "\"" + arrayOfClasses[i] + "\"" + "]";
    }
  }
  //print results in div with id "result"
  document.getElementById("result").innerHTML = newString;
}

function addClass(elem, className) {
  //if no class then add class attribute with className
  if (elem.hasAttribute("class") == false) {
    elem.setAttribute("class", className);
  }
  //add className to end of classes preceded by a space
  else {
    elem.className += " " + className;
  }
}

/*
 Write the validateForm function that checks that all text fields have entries and that the Password and
 Confirm Password entries are the same. If there are any errors have the validateForm function highlight
 the input field(s) in red and add an error message at the top of the form indicating what the error(s) were.
 */
function validateForm() {
  //check password entries same
  //compare password and confirm password
  //highlight input fields with errors in red
  //add error message at top of form (maybe need to separate form into nice little box)

  //gets unrefined results of user entered data and creates array
  var values = location.search;
  var valueArray = values.split("&");
  //if = is the last thing in string for each array element then error
  if(valueArray[0].charAt(6)==""){
    document.getElementById("error").innerHTML = "Please fill in the boxes.";
  }
  if(valueArray[1].charAt(7)==""){
    document.getElementById("error").innerHTML = "Please fill in the boxes.";
  }
  if(valueArray[2].charAt(10)==""){
    document.getElementById("error").innerHTML = "Please fill in the boxes.";
  }
  if(valueArray[3].charAt(9)==""){
    document.getElementById("error").innerHTML = "Please fill in the boxes.";
  }
  //compare after = for password and confirm password
  var password = valueArray[2].split("=");
  var confPassword = valueArray[3].split("=");

  if(password[1] != confPassword[1]){
    document.getElementById("password").style.backgroundColor = "red";
    document.getElementById("confirm").style.backgroundColor = "red";
    document.getElementById("error").innerHTML = "Your passwords do not match.";
  }
}

