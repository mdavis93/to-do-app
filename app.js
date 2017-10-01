function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the text
    let title = newToDoText.value;

    // Create new li
    let newLi = document.createElement('li');

    // Create a new input for the checkbox
    let checkbox = document.createElement('input');

    // Set the input's type to checkbox
    checkbox.type = "checkbox";

    // Set the title
    newLi.textContent = title;

    // Attach it to the ul
    toDoList.appendChild(newLi);

    // Attach the checkbox to the li
    newLi.appendChild(checkbox);

    // Empty the input
    newToDoText.value = "";
  });
}

window.onload = function() {
  onReady();
};
