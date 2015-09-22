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
  for(i=0; i<arrayOfClasses.length;i++){

    if(i==0 && (arrayOfClasses.length != 1)){
      newString = "[" + "\"" + arrayOfClasses[i] + "\", ";
    }
    else if(i==0 && (arrayOfClasses.length == 1)){
      newString = "[" + "\"" + arrayOfClasses[i] + "\"]";
    }
    else if(i!=0 && i!=arrayOfClasses.length-1){
      newString = newString + "\"" + arrayOfClasses[i] + "\", ";
    }
    else if(i==arrayOfClasses.length-1){
      newString = newString + "\"" + arrayOfClasses[i] + "\"" + "]";
    }
  }
  //print results in div with id "result"
  document.getElementById("result").innerHTML = newString;
}

function addClass(elem, className){
  //if no class then add class attribute with className
  if(elem.hasAttribute("class") == false){
    elem.setAttribute("class", className);
  }
  //add className to end of classes preceded by a space
  else{
    elem.className += " " + className;
  }
}

function validateForm(){

}

