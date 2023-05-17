import { createStore, action, computed } from "easy-peasy";
import { nanoid } from "nanoid";
const todoModel = {
    todos: [],
    addTodo: action((state, payload) => {
        payload.id = nanoid();
        state.todos.push(payload);
        payload.count = 1;
        payload.newValue = "";
    }),
    removeTodo: action((state, id) => {
        state.todos = state.todos.filter((todo) => todo.id !== id);
    }),

    addTodoCount: action((state, id) => {
        state.todos.forEach((todo) => {
            if (todo.id === id && todo.count < 99) { todo.count += 1 }
        });
    }),

    downTodoCount: action((state, id) => {
        state.todos.forEach((todo) => {
            if (todo.id === id && todo.count > 1) { todo.count -= 1 }
        });
    }),

    changeTodoTask: action((state, id) => {
        state.todos.forEach((todo) => {
            if (todo.id === id) { todo.task = todo.newValue }
        });
    }),

    numberOfItems: computed((state) => state.todos.length),

    //----------------------- По таймеру

    // workMinutes: 2,
    // breakMinutes: 1,


};
const taskStore = {
    todoModel
};
export default createStore(taskStore);
