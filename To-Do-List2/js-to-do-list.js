

    var taskInput = document.getElementById("new-task");
    var addButton = document.getElementsByTagName("button")[0];
    var incompleteTasksHolder = document.getElementById("incomplete-tasks");
    var completedTasksHolder = document.getElementById("completed-tasks");
//New Task List Item
var createNewTaskElement = function(taskString) {

    var listItem = document.createElement("li");
    var checkBox = document.createElement("input"); // checkbox
    var label = document.createElement("label");
    var editInput = document.createElement("input"); // text
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");
    var noteInput = document.createElement("input"); // text
    var noteButton = document.createElement("button");
    var dateInput = document.createElement("input"); // text
    var dateButton = document.createElement("button");



    checkBox.type = "checkbox";
    editInput.type = "text";
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    noteButton.innerText = "Note"
    noteButton.className = "note"

    dateInput.type = "date";
    dateInput.setAttribute("id","datechange");

    
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
     if(dd<10){
            dd='0'+dd
        }
        if(mm<10){
            mm='0'+mm
        }
    today = yyyy+'-'+mm+'-'+dd;
   // dateInput.setAttribute("min", today);
    dateInput.setAttribute("min",today);
 
    
    dateButton.innerText = "Date";
    dateButton.className = "date";

label.innerText = taskString;

alert(today);
  // each element needs appending
listItem.appendChild(checkBox);
listItem.appendChild(label);
listItem.appendChild(editInput);
listItem.appendChild(editButton);
listItem.appendChild(noteInput);
listItem.appendChild(noteButton);
listItem.appendChild(deleteButton);
listItem.appendChild(dateInput);
    listItem.appendChild(dateButton);
     listItem.appendChild(deleteButton);

return listItem;
}

// Add a new task
var addTask = function() {
console.log("Add task...");
var listItem = createNewTaskElement(taskInput.value);
incompleteTasksHolder.appendChild(listItem);
bindTaskEvents(listItem, taskCompleted);

taskInput.value = "";
}
// Edit an existing task
var editTask = function() {
console.log("Edit Task...");

var listItem = this.parentNode;
var editInput = listItem.querySelector("input[type=text]")
var label = listItem.querySelector("label");

var containsClass = listItem.classList.contains("editMode");
//if the class of the parent is .editMode
if(containsClass) {
label.innerText = editInput.value;
} else {
editInput.value = label.innerText;
}

listItem.classList.toggle("editMode");

}
// Delete an existing task
var deleteTask = function() {
console.log("Delete task...");
var listItem = this.parentNode;
var ul = listItem.parentNode;

//Remove the parent list item from the ul
ul.removeChild(listItem);
}
//Note task
var noteTask = function() {


}
// Mark a task as complete
var taskCompleted = function() {
console.log("Task complete...");
//Append the task list item to the #completed-tasks
var listItem = this.parentNode;
completedTasksHolder.appendChild(listItem);
bindTaskEvents(listItem, taskIncomplete);
}
// Mark a task as incomplete
var taskIncomplete = function() {
console.log("Task Incomplete...");
var listItem = this.parentNode;
incompleteTasksHolder.appendChild(listItem);
bindTaskEvents(listItem, taskCompleted);
}
var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
console.log("Bind list item events");
//select taskListItem's children
var checkBox = taskListItem.querySelector("input[type=checkbox]");
var editButton = taskListItem.querySelector("button.edit");
var deleteButton = taskListItem.querySelector("button.delete");


editButton.onclick = editTask;


deleteButton.onclick = deleteTask;

checkBox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function() {
console.log("AJAX Request");
}
// Set the click handler to the addTask function
//addButton.onclick = addTask;
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);
// Cycle over the incompleteTaskHolder ul list items
for(var i = 0; i <  incompleteTasksHolder.children.length; i++) {
bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}
// Cycle over the completeTaskHolder ul list items
for(var i = 0; i <  completedTasksHolder.children.length; i++) {
bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
