function onReady() {

  var toDos = [];
  var addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    var newToDoText = document.getElementById('newToDoText');
    toDos.push({
      id: toDos.length,
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';

    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    var toDoList = document.getElementById('toDoList');

    toDoList.innerHTML = '';

    toDos.forEach(function(toDo) {
      var newLi = document.createElement('li');
      var checkbox = document.createElement('input');

      // Create the Delete Button
      var delButton = document.createElement('button');
      checkbox.type = "checkbox";

      newLi.innerHTML = toDo.title;

      // Assign the Button Text
      delButton.innerHTML = "Delete";

      // In order to know which object to delete from the array, give the
      // button the id of the index of the object it represents
      delButton.id = toDo.id.toString();

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(delButton);

      delButton.addEventListener('click', (event) => {
        // How many to-do objects do we have?
        let i = toDos.length;

        // So long as there are more to-do items to check...
        while (i--) {
          // Is there a to-do item? And, does its ID match the button's ID?
          if (toDos[i] && toDos[i]['id'] == event.target.id) {
            // Yes, we've found the to-do entry to delete.  Remove it via splice()
            toDos.splice(i,1);
            // Since every to-do has a unique ID, and only a single button linked to it,
            // we can safely break out of the while loop as there will be no more matches.
            break;
          }
        }

        // We have modified the collection, redraw the UI.
        renderTheUI(toDos);
      });
    });
  }

  addToDoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI(toDos);
}

window.onload = function() {
  onReady();
};
