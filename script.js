const API_URL = "https://script.google.com/macros/s/AKfycbyeV86TafTwQYYfSMAENCsiCOsSPgz7xWRTGF-ZxUn9k1GJfAAnU_cpfR0GKzu16LEMzA/exec";

async function loadTasks() {
    let res = await fetch(API_URL + "get");
    let tasks = await res.json();

    let html = "";
    tasks.forEach(t => {
        html += `<div class="task">
            <p><b>${t.task}</b> — ${t.time}</p>
        </div>`;
    });

    document.getElementById("taskList").innerHTML = html;
}

async function addTask() {
    let task = document.getElementById("taskInput").value;
    if (!task) return alert("Enter AO number!");

    await fetch(API_URL + "add&task=" + encodeURIComponent(task));

    document.getElementById("taskInput").value = "";
    loadTasks();
}

loadTasks();
