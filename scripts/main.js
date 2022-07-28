//SRP- Single Responsibe Principle(use individual functions to perform logic)
//Global Variables
var regularIcon = "fa-regular fa-star";
var solidIcon = "fa-solid fa-star";
var isImportant = false;

function toggleImportant() {
  console.log("Icon Clicked");

  //change to important
  if (!isImportant) {
    $("#iImportant").removeClass(regularIcon).addClass(solidIcon); //remove regular icon class
    isImportant = true; //to keep track of state of icon
  } else {
    //change to non important
    $("#iImportant").removeClass(solidIcon).addClass(regularIcon); //remove non-important icon class
    isImportant = false; //to keep track of state of icon
  }
}
function saveTask() {
  console.log("save button clicked");

  //using jquery to save data from form.
  let title = $("#txtTitle").val();
  let dueDate = $("#selDueDate").val();
  let description = $("#txtdescription").val();
  let color = $("#selColor").val();
  let emoji = $("#selEmoji").val();
  let location = $("#txtLocation").val();
  let status = $("#selStatus").val();
  let notify = $("#chkNotify").prop("checked");

  let task = new Task(
    isImportant,
    title,
    dueDate,
    description,
    color,
    emoji,
    location,
    status,
    notify
  );
  //using ajax and JSON.stringify to send 'saveTask' form informat to server in JSON format.
  $.ajax({
    type: "POST",
    url: "https://fsdiapi.azurewebsites.net/api/tasks/",
    data: JSON.stringify(task),
    contentType: "application/json",
    success: function (res) {
      console.log("server says", res);
      displayTask(task);
    },
    error: function (errorDetails) {
      console.log("Error saving tasks", errorDetails);
    },
  });

  console.log(
    isImportant,
    title,
    dueDate,
    description,
    color,
    emoji,
    location,
    status,
    notify
  );
}
//using HTML, jQuery to add table to page.  Must use backticks!!! ``
function displayTask(task) {
  let syntax = `<div class="task" style="border:5px solid ${task.color};">  
      <i class="fa-regular fa-star"></i>
  
      <div class="info">
        <h5>${task.title}</h5>
        <p>${task.description}</p>
      </div>
  
      <label class="location">${task.location}</label>
  
      <label class="date">${task.dueDate}</label>
  
      <label class="status">${task.status}</label>
  
    </div>`;
  //used jQuiery to append to table on server for information.
  $("#pendingTasks").append(syntax);
}
//using ajax to retrieve information from the server and display on the console.
function testRequest() {
  $.ajax({
    type: "GET",
    url: "https://fsdiapi.azurewebsites.net/",
    success: function (res) {
      console.log("Server says", res);
    },
    error: function (errorDetails) {
      console.log("Error", errorDetails);
    },
  });
}
//function to get all tasks that match my name only and display on the page. 'GET' https://fsdiapi.azurewebsites.net/api/tasks/",
function fetchTasks() {
  $.ajax({
    type: "GET",
    url: "https://fsdiapi.azurewebsites.net/api/tasks",
    success: function (res) {
      //console.log("Server says", res);
      let tasks = JSON.parse(res); //results in an array of task objects
      //for loop over the array

      for (i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        if (task.name == "Jimmy") {
          displayTask(task);
        }
      }
      //  }
      //console.log(tasks);
    },
    //error: function(errorDetails){
    //    console.log("Error retriving tasks",errorDetails);
    //}
  });
}
//use init to load data on the page to speed page loading
//add init data
function init() {
  console.log("Task Manager page id");
  //assigns events or 'hooks events'  Do not add logic here
  $("#iImportant").click(toggleImportant);
  $("#btnSave").click(saveTask);

  //load initial data
  fetchTasks();
}
//used to load page upon opening.
window.onload = init;
