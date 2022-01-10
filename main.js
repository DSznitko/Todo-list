let toDoIput;
let errorInfo;
let addBtn;
let ulList;
let newTodo;
let popup;
let popupInfo;
let todoToEdit;
let popupInput;
let popupAddBtn;
let popupCloseBtn;


const main = () => {
prepareDOMElements();
prepareDOMEvents();
}


const prepareDOMElements = () => {
toDoIput = document.querySelector(".todo-input")
errorInfo = document.querySelector(".error-info")
 addBtn= document.querySelector(".btn-add")
ulList = document.querySelector(".todolist ul")

popup = document.querySelector(".popup")
popupInfo = document.querySelector(".popup-info")
popupInput = document.querySelector(".popup-input")
popupAddBtn = document.querySelector(".accept")
popupCloseBtn = document.querySelector(".cancel")

}


const prepareDOMEvents = () => {
addBtn.addEventListener("click", addNewTodo);
ulList.addEventListener("click", checkClick);
popupCloseBtn.addEventListener("click", closePopup);
popupAddBtn.addEventListener("click", changeTodoText);
toDoIput.addEventListener("keyup", keyEnter)
};

const addNewTodo = () => {
  if(toDoIput.value !== "") {
    newTodo = document.createElement("li");
newTodo.textContent = toDoIput.value;
ulList.append(newTodo);
toDoIput.value = "";
errorInfo.textContent = "";
createToolsArea()
  } else {
    errorInfo.textContent = "Enter task content!"
  }
};


const createToolsArea = () => {
   const toolsPanel = document.createElement("div");
   toolsPanel.classList.add("tools");
   newTodo.append(toolsPanel);

   const completeBtn = document.createElement("button");
   completeBtn.classList.add("complete");
   completeBtn.innerHTML = `<i class="fas fa-check"></i>`

   const editBtn = document.createElement("button");
   editBtn.classList.add("edit");
editBtn.textContent = "EDIT";

   const deleteBtn = document.createElement("button");
deleteBtn.classList.add("delete");
deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;

toolsPanel.append(completeBtn, editBtn, deleteBtn);
}

const checkClick = e => {
  if( e.target.matches(".complete")) {
    e.target.closest("li").classList.toggle("completed");
    e.target.classList.toggle("completed")
  } else if(e.target.matches(".edit")) {
editTodo(e);

  } else if(e.target.matches(".delete")) {
    deleteTodo(e)
  }
  }



const editTodo = (e) => {
popup.style.display = "flex";
todoToEdit = e.target.closest("li");
popupInput.value = todoToEdit.firstChild.textContent;

};

const closePopup = () => {
  popup.style.display = "none";
  popupInfo.textContent = "";
}

const changeTodoText = () => {
  if(popupInput.value !== "") {
    todoToEdit.firstChild.textContent = popupInput.value;
    popup.style.display = "none";
    popupInfo.textContent = "";
  } else {
popupInfo.textContent = "Enter some value!"
  }
}

const deleteTodo = e => {
 e.target.closest("li").remove();
 const allTodos = ulList.querySelectorAll("li");
 
 if(allTodos.length === 0) {
   errorInfo.textContent = "No task on the list."
 }
}

const keyEnter = e => {
if(e.key === "Enter") {
  addNewTodo();
}
}


document.addEventListener("DOMContentLoaded", main);




