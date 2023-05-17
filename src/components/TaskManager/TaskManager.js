import React from "react";
import "./taskManager.css";
import { Task } from "../Task/Task";

import { useForm, Controller } from "react-hook-form";
import { useStoreActions } from "easy-peasy";
import { useStoreState } from "easy-peasy";
import { nanoid } from "nanoid";


export function TaskManager() {

  const numberOfItems = useStoreState((state) => state.todoModel.numberOfItems);

  const addTodo = useStoreActions((state) => state.todoModel.addTodo);
  const { handleSubmit, control, reset } = useForm();
  const onSubmit = (data) => {
    addTodo(data);
    reset();
  };


  const todos = useStoreState((state) => state.todoModel.todos);

  function getTimeTotal() {
    let timeIn = 0;
    todos.forEach((element) => {
      timeIn += element.count * 25;
    });

    if (timeIn > 0 && timeIn < 60) {
      return `${timeIn} мин`
    }

    if (timeIn % 60 === 0) {
      return `${timeIn / 60} час`
    }

    if (timeIn > 60) {
      return `${Math.trunc(timeIn / 60)} час ${timeIn % 60} мин`
    }

    return false;
  }

  return (
    <div className="task-manager">
      <h1>Ура! Теперь можно начать работать:</h1>
      <ul>
        <li>{"Выберите категорию и напишите название текущей задачи"}</li>
        <li>{"Запустите таймер («помидор»)"}</li>
        <li>{"Работайте пока «помидор» не прозвонит"}</li>
        <li>{"Сделайте короткий перерыв (3-5 минут)"}</li>
        <li>{"Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут)."}</li>
      </ul>

      <div className="task-manager__task-creator">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="task"
            control={control}
            defaultValue=""
            render={({ field }) => <input  placeholder="Название задачи" maxLength={30} required autoComplete="off" {...field} autoFocus />}
          />
          <button type="submit">Добавить</button>
        </form>
      </div>

      <div className="task-manager__task-list">
        <ul>
          {todos.map((todo) => (
            <li key={nanoid()}>{<Task todo={todo} />}</li>
          ))}
        </ul>
      </div>
      {numberOfItems !== 0 && (
        <span className="task-manager__time-total">{getTimeTotal()}</span>)
      }
    </div>
  );
}
