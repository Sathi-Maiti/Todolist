const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


addBtn.addEventListener("click", addTask);


function addTask() {

    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    li.textContent = taskText;


    // Mark task as completed when clicked
    li.addEventListener("click", function(){
        li.classList.toggle("completed");
    });


    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");


    // Delete the task
    deleteBtn.addEventListener("click", function(event){
        event.stopPropagation();
        li.remove();
    });


    li.appendChild(deleteBtn);

    taskList.appendChild(li);


    // Clear input box
    taskInput.value = "";
}