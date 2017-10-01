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

    // Create a delete button
    let delBtn = document.createElement('button');
    delBtn.innerText="Delete";

    // Set the input's type to checkbox
    checkbox.type = "checkbox";

    // Set the title
    newLi.textContent = title;

    // Attach it to the ul
    toDoList.appendChild(newLi);

    // Attach the checkbox to the li
    newLi.appendChild(checkbox);

    // Attach the delete button to the li
    newLi.appendChild(delBtn);

    // Empty the input
    newToDoText.value = "";
  });

  // Add an EventListener to the <ul>
  toDoList.addEventListener('click', (e) => {
    // If we clicked the delete button, the innerText will be "Delete"
    if (e.target.innerText === "Delete") {
      // Target the grandparent of the button, in order to remove its parent
      e.target.parentNode.parentNode.removeChild(
        // Remove the button's parent, the <li> element.
        e.target.parentNode
      );
    }
  });
}

function delToDo(e) {
  // Target the UL
  let liParent = e.target.parentNode.parentNode;
  liParent.removeChild(e.target.parentNode);
}

window.onload = function() {
  onReady();
};
