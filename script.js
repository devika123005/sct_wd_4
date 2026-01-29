function addTask() {
    let taskText = document.getElementById("taskInput").value;
    let dateTime = document.getElementById("dateTime").value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${taskText} <br>
        <small>${dateTime}</small><br>
        <button onclick="completeTask(this)">✔</button>
        <button onclick="editTask(this)">✏</button>
        <button onclick="deleteTask(this)">🗑</button>
    `;

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
    document.getElementById("dateTime").value = "";
}

function completeTask(btn) {
    btn.parentElement.classList.toggle("completed");
}

function deleteTask(btn) {
    btn.parentElement.remove();
}

function editTask(btn) {
    let newTask = prompt("Edit task:");
    if (newTask !== null) {
        btn.parentElement.childNodes[0].textContent = newTask;
    }
}
