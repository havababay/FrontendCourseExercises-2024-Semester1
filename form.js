import { Person } from "../model/person.js";
import { personsList } from "../data/persons.js";

let body = document.body;
let table = document.createElement("table");
body.appendChild(table);

for (let i = 0; i < personsList.length; i++) {
  let tr = document.createElement("tr");
  for (let j = 0; j < 3; j++) {
    let td = document.createElement("td");
    td.textContent = i * j;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

let form = document.getElementById("registrationForm");
form.addEventListener("submit", (event) => {
  let password = form.password.value;
  let confirmPassword = form["confirmPassword"].value;
  if (password !== confirmPassword) {
    event.preventDefault();

    let errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "Passwords do not match";
  }

  let person = new Person(form.name.value, form.email.value, password);
});

form.addEventListener("input", () => {
  let errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = "";
});

function globalButtonClick() {
  alert("global clicked");
}

window.globalButtonClick = globalButtonClick;

let navigationDemo = document.getElementById("navigationDemo");
navigationDemo.addEventListener("click", () => {
  window.location.href = "event_handling.html";
});
