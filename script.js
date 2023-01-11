const addTask = document.getElementById("add-task");
const taskInput = document.getElementById("taskInput");
const taskDiv = document.getElementById("all-task");
const errorData = document.getElementById("error-data");

addTask.addEventListener("submit", function(e) {
  e.preventDefault();

  const taskText = taskInput.value;
  if (taskText) {
    errorData.innerHTML = "";
    taskInput.value = "";

    const singleTaskDiv = document.createElement("div");
    singleTaskDiv.classList.add("single-task");

    const singleTaskTest = document.createElement("input");
    singleTaskTest.type = "Text";
    singleTaskTest.value = taskText;
    singleTaskTest.setAttribute("readonly", "readonly");

    const editTask = document.createElement("button");
    editTask.classList.add("edit-task");
    editTask.innerText = "Edit";

    const completeTask = document.createElement("button");
    completeTask.classList.add("complete-task");
    completeTask.innerText = "Complete";

    const deleteTask = document.createElement("button");
    deleteTask.classList.add("delete-task");
    deleteTask.innerText = "Delete";

    singleTaskDiv.appendChild(singleTaskTest);
    singleTaskDiv.appendChild(editTask);
    singleTaskDiv.appendChild(completeTask);
    singleTaskDiv.appendChild(deleteTask);

    taskDiv.appendChild(singleTaskDiv);

    editTask.addEventListener("click", function(e) {
      if (editTask.innerText == "Edit") {
        editTask.innerText = "Save";
        singleTaskTest.removeAttribute("readonly");
        singleTaskTest.focus();
      } else {
        editTask.innerText = "Edit";
        singleTaskTest.setAttribute("readonly", "readonly");
      }
    });

    completeTask.addEventListener("click", function(e) {
      if (completeTask.innerText == "Complete") {
        completeTask.innerText = "Completed";
        singleTaskDiv.classList.add("task-completed");
      }
    });

    deleteTask.addEventListener("click", function(e) {
      taskDiv.removeChild(singleTaskDiv);
    });
  } else {
    errorData.innerHTML = "<p>Please Add Some Task !</p>";
  }
});
