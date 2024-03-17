// Elements
const addBtn = document.querySelector(".add-btn");
const taskInput = document.querySelector(".task-input");
const taskUl = document.querySelector(".task-ul");
const taskLi = document.querySelector(".task-li");

// Store todos in local storage
// Get todos from local storage
// Show message for adding tasks if no task are stored
// Delete Tasks
// Add Edit Button

// Store todos in local storage
const taskData = JSON.parse(localStorage.getItem("tasks"));

const taskArray = taskData ? [...taskData] : [];

addBtn.addEventListener("click", () => {
  if (taskInput.value.length < 1) return;

  taskArray.push(taskInput.value);

  console.log(taskArray);

  localStorage.setItem("tasks", JSON.stringify(taskArray));

  taskInput.value = "";

  
  renderTasks();
});

// Get todos from local storage
function renderTasks() {
  taskUl.innerHTML = "";
  taskArray.map((item) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item));

    const deleteBtn = document.createElement("a");
    deleteBtn.appendChild(document.createTextNode("Delete"));

    li.appendChild(deleteBtn);

    taskUl.appendChild(li);

    deleteBtn.addEventListener("click", () => {
      console.log(item);
    });
  });
}

renderTasks();