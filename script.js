let tasks = [];
let completedTasks = [];

function addTask() {
    const taskName = document.getElementById("taskName").value;
    const taskDate = document.getElementById("taskDate").value;

    if (taskName === "" || taskDate === "") {
        alert("Please enter task name and due date");
        return;
    }

    tasks.push({ name: taskName, date: taskDate });
    document.getElementById("taskName").value = "";
    document.getElementById("taskDate").value = "";

    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        taskList.innerHTML += `
            <div class="card">
                <h3>${task.name}</h3>
                <p>Due Date: ${task.date}</p>
                <button onclick="completeTask(${index})">Mark as Completed</button>
            </div>
        `;
    });
}

function completeTask(index) {
    completedTasks.push(tasks[index]);
    tasks.splice(index, 1);
    displayTasks();
    displayCompletedTasks();
    alert("Task marked as completed!");
}

function displayCompletedTasks() {
    const completedList = document.getElementById("completedList");
    completedList.innerHTML = "";

    completedTasks.forEach(task => {
        completedList.innerHTML += `
            <div class="card">
                <h3>${task.name}</h3>
                <p>Status: Completed</p>
            </div>
        `;
    });
}
