//Global Variables
var importantIconClass = "fa-regular fa-star";
var nonImportantIconClass = "fa-solid fa-star"
var isImportant = false;


function toggleImportant(){
    console.log('Icon Clicked');
    
    //change to important
        if(!isImportant){
    $("#iImportant").removeClass(importantIconClass); //remove non-important icon class
    $("#iImportant").addClass(nonImportantIconClass); //add important icon class
    isImportant = true;  //to keep track of state of icon
        }
        else{
            //change to non important
            $("#iImportant").removeClass(nonImportantIconClass); //remove non-important icon class
            $("#iImportant").addClass(importantIconClass); //add important icon class
            isImportant = false;  //to keep track of state of icon
        }
}
function init(){
    console.log("Task Manager page id");
    
    $("#iImportant").click(toggleImportant);

}

window.onload = init;