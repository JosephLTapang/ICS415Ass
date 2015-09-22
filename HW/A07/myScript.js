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

    if(i==0){
      newString = "[" + "\"" + arrayOfClasses[i] + "\", ";
    }
    else if(i!=0 && i!=arrayOfClasses.length-1){
      newString = newString + "\"" + arrayOfClasses[i] + "\", ";
    }
    else if(i==arrayOfClasses.length-1){
      newString = newString + "\"" + arrayOfClasses[i] + "\"" + "]";
    }
  }

  document.getElementById("result").innerHTML = newString;
}

function addClass(elem, className){

}
//to be done later
function validateForm(){

}

