/**
 * Created by StickandJab on 9/25/2015.
 */

//Part I
function answerOne() {
  $(document).ready(function () {
    $("#one").click(function () {
      $("#question1,#answer1").toggle();
    });
  });
}

function answerTwo() {
  $(document).ready(function () {
    $("#two").click(function () {
      $("#question2,#answer2").toggle();
    });
  });
}

function answerThree() {
  $(document).ready(function () {
    $("#three").click(function () {
      $("#question3,#answer3").toggle();
    });
  });
}

function answerFour() {
  $(document).ready(function () {
    $("#four").click(function () {
      $("#question4,#answer4").toggle();
    });
  });
}

function answerFive() {
  $(document).ready(function () {
    $("#five").click(function () {
      $("#question5, #answer5").toggle();
    });
  });
}

//Part II
function linkCount() {
    document.getElementById("result").innerHTML = document.links.length + " links";
}

