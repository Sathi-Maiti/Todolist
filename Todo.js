const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Load saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    todoList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.completed ? "completed" : ""}">
                ${task.text}
            </span>
            <button onclick="completeTask(${index})">Complete</button>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;

        todoList.appendChild(li);
    });
}

addButton.addEventListener("click", function () {
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    input.value = "";

    saveTasks();
    displayTasks();
});

function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;

    saveTasks();
    displayTasks();
}

function editTask(index) {
    const newText = prompt("Edit your task:", tasks[index].text);

    if (newText !== null && newText.trim() !== "") {
        tasks[index].text = newText.trim();

        saveTasks();
        displayTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);

    saveTasks();
    displayTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

displayTasks();
