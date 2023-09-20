//reading input from the user
let month = parseInt(prompt("Enter the month (1-12) : ")); //by default every input is string

//Declaring variables to hold info
let season = "NULL";
let seasonColor = "black";

//using switch to check the month and assign the season
switch(month){
    case 1:
    case 2:
    case 3:
        season = "Spring";
        seasonColor = "lightgreen";
        break;
    case 4:
    case 5:
    case 6:
        season = "Summer";
        seasonColor = "#cd5c5c";
        break;
    case 7:
    case 8:
    case 9:
        season = "Autumn";
        seasonColor = "efcc00 ";
        break;
    case 10:
    case 11:
    case 12:
        season = "Winter";
        seasonColor = "lightblue";
        break;
    default:
        alert("Invalid Input");
        break;
}
document.write(season);
document.body.style.backgroundColor=seasonColor;