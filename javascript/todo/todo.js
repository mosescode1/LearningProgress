"use strict";
const todo = [];
let completed = [];
/**
 * STEPS
 * create todo - Add to the todo list  -- Done
 * show - prints the todo list
 * delele - delete the todo
 * completed - remove from tofo ===do and save to completed
 * clear - either clear the todo or the completed
 */
createTodo();

// function to created todo
function createTodo() {
  const todoName = prompt("Add Your Task", "");
  if (todoName !== null) {
    todo.push(todoName);
  }
}

const showTodo = () => console.log(todo);
showTodo();

console.log(todo);
