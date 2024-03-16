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

// https://gomakethings.com/updating-your-ui-based-on-user-inputs-with-vanilla-javascript/

// Store todos in local storage
const taskArray = [];

addBtn.addEventListener("click", () => {
  if (taskInput.value.length < 1) return;

  taskArray.push(taskInput.value);

  taskUl.innerHTML += "<li>" + taskInput.value + "</li>";

  localStorage.setItem("tasks", JSON.stringify(taskArray));

  taskInput.value = "";
});

// Get todos from local storage
const taskData = JSON.parse(localStorage.getItem("tasks"));
taskData.map((item) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  taskUl.appendChild(li);
  console.log(item);
});

// Delete Tasks
