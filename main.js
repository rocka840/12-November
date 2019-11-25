var myHTMLItem = document.getElementById("container");

var myYellowBox = '<div class="box yellowBox"></div>';
var myGreenBox = '<div class="box greenBox"></div>';

var result = "";

for (lines = 0; lines < 10; lines++) {
    result = result + "<div>";
    for (i = 0; i < 10; i++) {
        if (lines % 2 === 1) {
            if (i % 2 == 1) {
                result = result + BuildBox(lines, i, "greenBox");
            } else {
                result = result + BuildBox(lines, i, "yellowBox");
            } {
                else
            }
            if (i % 2 == 0) {
                result = result + BuildBox(lines, i, "greenBox");
            } else {
                result = result + BuildBox(lines, i, "yellowBox");
            }
        }
    }
    result = result + "</div>";
}
myHTMLItem.innerHtml = result;

function BuildBox(line, col, colorOfBox) {
    var idOfThisBox = "myBox_" + line + '-' + col;
    var result = '<div id="'; // add the id of the box
    result += idOfThisBox; // finish adding the id
    result += '" class="box ' + colorOfBox + '"'; //add the classes
    // start building the onClick event for each box
    // it should result in a string like:
    // onClick="myBoxwasClicked('green');"
    result += 'onclick="myBoxWasClicked(';
    result += "'" + idOfThisBox + "');";
    result += '"'; //end of the onClick event

    //finish the HTML tag
    result += '></div';
    return result;
}




//result += myGreenBox + myYellowBox;

/*result = result + myYellowBox;
  result = result + mxGreenBox;*/

// myHTMLItem.innerHTML = result;
// myYellowBox + myGreenBox + myYellowBox + myGreenBox;