window.onload =function () {
    const addButton = document.getElementById('addButton');
    const resetButton = document.getElementById('resetButton');

    addButton.onclick = ajouterTache;
    resetButton.onclick = reinitialiserTache;
}

function ajouterTache() {

    const task = document.getElementById("tache");
    const taskList = document.getElementById("taskList");
    const taskListDone = document.getElementById("taskListDone");
  
    if (task.value) {
      let newItem = document.createElement("li");
      newItem.innerHTML = task.value;
  
      $(newItem).on("swiperight", function () {
        $(this).toggleClass("done");
        if ($(this).hasClass("done")) {
          taskListDone.appendChild(this);
        } else {
          taskList.appendChild(this);
        }
      });
  
      $(newItem).on("swipeleft", function () {
        $(this).hide("slow", function () {
          $(this).remove();
        });
      });
  
      taskList.appendChild(newItem);
      $(taskList).listview("refresh");
      task.value = "";
    }
  }
  function resetList(){
    taskList.innerHTML = '';
    taskListDone.innerHTML = '';
  };