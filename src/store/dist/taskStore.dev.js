"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyPeasy = require("easy-peasy");

var _nanoid = require("nanoid");

var todoModel = {
  todos: [],
  addTodo: (0, _easyPeasy.action)(function (state, payload) {
    payload.id = (0, _nanoid.nanoid)();
    state.todos.push(payload);
    payload.count = 1;
    payload.newValue = "";
  }),
  removeTodo: (0, _easyPeasy.action)(function (state, id) {
    state.todos = state.todos.filter(function (todo) {
      return todo.id !== id;
    });
  }),
  addTodoCount: (0, _easyPeasy.action)(function (state, id) {
    state.todos.forEach(function (todo) {
      if (todo.id === id && todo.count < 99) {
        todo.count += 1;
      }
    });
  }),
  downTodoCount: (0, _easyPeasy.action)(function (state, id) {
    state.todos.forEach(function (todo) {
      if (todo.id === id && todo.count > 1) {
        todo.count -= 1;
      }
    });
  }),
  changeTodoTask: (0, _easyPeasy.action)(function (state, id) {
    state.todos.forEach(function (todo) {
      if (todo.id === id) {
        todo.task = todo.newValue;
      }
    });
  }),
  numberOfItems: (0, _easyPeasy.computed)(function (state) {
    return state.todos.length;
  }),
  //----------------------- По таймеру
  workMinutes: 2,
  breakMinutes: 1
};
var taskStore = {
  todoModel: todoModel
};

var _default = (0, _easyPeasy.createStore)(taskStore);

exports["default"] = _default;