let todoList = [
  { item: "Bay Milk", dueDate: "4/10/2024" },
  { item: "Go to college ", dueDate: "1/10/2024" },
];
displayItems();
function addTodo() {
  let inputElement = document.querySelector("#todo-input");

  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let tododate = dateElement.value;
  // console.log(todoItem);
  todoList.push({ item: todoItem, dueDate: tododate });
  inputElement.value = " ";
  dateElement.value = " ";
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = " ";

  for (let i = 0; i < todoList.length; i++) {
    // let item = todoList[i].item;
    // let dueDate = todoList[i].dueDate;
    let { item, dueDate } = todoList[i];
    newHtml += `
    
    <spam>${item}</spam>
    <spam>${dueDate}</spam>
    <button class="btn-delete" onclick="todoList.splice(${i},1); displayItems();">Delete</button>
    
    
    `;
  }
  containerElement.innerHTML = newHtml;
}
