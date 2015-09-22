/**
 * Created by StickandJab on 9/18/2015.
 */

function getClasses(elem) {
  //makes a nodeList of element objects
  var myNodeList = document.getElementsByTagName(elem);

  /*Code below prints out classes for each element on a line*/
  //document.getElementById("result").innerHTML = myNodeList[0].className + "<br>" +
  //myNodeList[1].className;
  //first string of classes separated by ' '
  var stringOfClasses = myNodeList[0].className;
  //this will be the array of classes from the split string of classes
  var classArray = stringOfClasses.split(" ");
  //print out string of array of classes as class,class
  //need to override toString to add []'s and ""'s
  document.getElementById("result").innerHTML = classArray.toString();
}

function addClass(elem, className){
  
}
//to be done later
function validateForm(){

}

