'use strict';
const todo = [];
const finishedTodo = [];

let dom = document.getElementsByClassName('todo');
/**
 * STEPS
 * create todo - Add to the todo list  -- Done
 * show - prints the todo list -- Done
 * delele - delete the todo -- delete a todo -- Done
 * completed - remove from todo and save to completed -- done
 * clear - either clear the todo or the completed
 */

// function to created todo
function createTodo() {
  const todoName = prompt('Add Your Task', '');
  if (todoName !== null) {
    todo.push(todoName);
  }
}
// shows the todo list
function showTodo() {
  dom.write = todo;
}
// show completed todo
const showCompleted = () => console.log('Completed Todo', finishedTodo);

// deletes a Todo From the todo list
function deleteTodo() {
  // checks if todo exists
  const todoName = prompt('What todo do you want to delete');
  if (!todo.includes(todoName)) {
    console.log(`${todoName} doesn't exits `);
  } else {
    let todoIndex = todo.indexOf(todoName);
    todo.splice(todoIndex, 1);
  }
}
// complted todo
function completedTodo() {
  const completedTodo = prompt('Which todo has been completed');
  if (!todo.includes(completedTodo)) {
    console.log(`${completedTodo} doesn't exits `);
  } else {
    const todoIndex = todo.indexOf(completedTodo);
    todo.splice(todoIndex, 1);
    finishedTodo.push(completedTodo);
  }
}
// clear list
function clear(value) {
  value.splice(0);
}

// starting the todo
let isTrue = true;
while (isTrue) {
  const choice = prompt('what would you like todo', 'create');
  switch (choice) {
    case 'create':
      createTodo();
      break;
    case 'show':
      showTodo();
      break;
    case 'completed':
      completedTodo();
      break;
    case 'delete':
      deleteTodo();
      break;
    case 'show completed':
      showCompleted();
      break;
    case 'clear':
      clear();
      break;
    case 'exit':
      isTrue = false;
      break;
    default:
      console.log('Enter a valid option');
  }
}
