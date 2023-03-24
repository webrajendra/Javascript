const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");

const tasks = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTask();
  tasks.push({ title: title.value, description: description.value });
  localStorage.setItem("tasks", JSON.stringify(tasks)); //It will store in local storage
  showAllTasks();
});

function removeTask() {
  tasks.forEach(() => {
    const div = document.querySelector(".task");
    div.remove();
  });
}

function showAllTasks() {
  tasks.forEach((index) => {
    const container = document.querySelector(".container");
    const div = document.createElement("div");
    div.setAttribute("class", "task");
    const innerDiv = document.createElement("div");
    div.append(innerDiv);
    const p = document.createElement("p");
    p.innerText = title.value;
    const span = document.createElement("span");
    span.innerText = description.value;
    innerDiv.append(p);
    innerDiv.append(span);
    container.append(div);
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "deleteBtn");
    deleteBtn.innerText = "-";
    deleteBtn.addEventListener("click", () => {
      removeTask();
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks)); // It will remove from local storage as well
      showAllTasks();
    });
    div.append(deleteBtn);
  });
}
