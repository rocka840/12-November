var myHTMLItem = document.getElementById("container");

var myYellowBox = '<div class="box yellowBox"></div>';
var myGreenBox = '<div class="box greenBox"></div>';

myHTMLItem.innerHTML = myYellowBox + myGreenBox + myYellowBox + myGreenBox;

for (;;)