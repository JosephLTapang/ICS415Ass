/**
 * Created by StickandJab on 9/18/2015.
 */

function getClasses(elem){
  //makes a nodeList of element objects
  var	myNodeList = document.getElementsByTagName(elem);

  document.getElementById("result").innerHTML = myNodeList[0].className + "<br>" + myNodeList[1].className;


}

