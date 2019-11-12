var myHTMLItem = document.getElementById("container");

var myYellowBox = '<div class="box yellowBox"></div>';
var myGreenBox = '<div class="box greenBox"></div>';

var result = "";
for (i = 0; i < 10; i++) {
    result += myGreenBox + myYellowBox;
    /*result = result + myYellowBox;
      result = result + mxGreenBox;*/
}

myHTMLItem.innerHTML = result;
// myYellowBox + myGreenBox + myYellowBox + myGreenBox;