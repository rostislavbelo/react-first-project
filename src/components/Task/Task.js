import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./task.css";
import { useStoreActions } from "easy-peasy";

export function Task({ todo }) {
  const [open, setOpen] = useState(false);
  const [onChangeName, setOnChangeName] = useState(false);
  const removeTodo = useStoreActions((state) => state.todoModel.removeTodo);
  //const count = useStoreState((state) => state.todo.count);
  const addCount = useStoreActions((state) => state.todoModel.addTodoCount);
  const downCount = useStoreActions((state) => state.todoModel.downTodoCount);
  const changeTask = useStoreActions((state) => state.todoModel.changeTodoTask);

  const [isModalOpened, setIsModalOpened] = useState(false);
  const inputRef = useRef(null);

  const handleClickInputFocus = () => {
    inputRef.current.focus();
  };

  let inputCurrentValue = todo.task;

  function onChangeInput(event) {
    inputCurrentValue = event.target.value;
  }

  useEffect(() => {

    const overlay = document.querySelector('#overlay');
    function handleClick(event) {
      if (event.target === overlay) {
        setIsModalOpened(false)
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  })

  useEffect(() => {
    const dropdown = document.querySelector('#dropdown')

    function handleClick(event) {
      if (dropdown && event.target !== dropdown.closest('#task-button')) {
        setOpen(false)
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  })


  return (

    <div className="task">

      {onChangeName && (
        <div className="task__change-name-form" onBlur={() => {setOnChangeName(false); changeTask(todo.id, todo.newValue=inputCurrentValue)}}>
          <form>
            <input onChange={onChangeInput} ref={inputRef} placeholder={todo.task} maxLength={30} autoComplete="off" />
          </form>
        </div>)}

      <span className="task__count">{todo.count}</span>
      <span className="task__title">{todo.task}</span>
      <div className="task__button" id="task-button" onClick={() => { setOpen(!open) }}>
        <svg width="26" height="6" viewBox="0 0 26 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="3" cy="3" r="3" fill="#C4C4C4" />
          <circle cx="13" cy="3" r="3" fill="#C4C4C4" />
          <circle cx="23" cy="3" r="3" fill="#C4C4C4" />
        </svg>

        {open && (

          <div className="task__dropdown" id="dropdown">

            <svg width="165" height="153" viewBox="0 0 165 153" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M89 6.5H164.5V152.5H0.5V6.5H76H76.1955L76.3391 6.3674L82.5 0.680456L88.6609 6.3674L88.8045 6.5H89Z" fill="white" stroke="#C4C4C4" />
            </svg>

            <button onClick={() => addCount(todo.id)}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M9.75 5.25H8.25V8.25H5.25V9.75H8.25V12.75H9.75V9.75H12.75V8.25H9.75V5.25ZM9 1.5C4.8675 1.5 1.5 4.8675 1.5 9C1.5 13.1325 4.8675 16.5 9 16.5C13.1325 16.5 16.5 13.1325 16.5 9C16.5 4.8675 13.1325 1.5 9 1.5ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15Z" fill="#A8B64F" />
                </g>
                <defs>
                  <clipPath id="clip0_35_100">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Увеличить</span>
            </button>

            <button onClick={() => downCount(todo.id)} >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M9 1.5C4.8675 1.5 1.5 4.8675 1.5 9C1.5 13.1325 4.8675 16.5 9 16.5C13.1325 16.5 16.5 13.1325 16.5 9C16.5 4.8675 13.1325 1.5 9 1.5ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15Z" fill="#A8B64F" />
                  <path d="M5.25 8.25H8.25H9.75H12.75V9.75H9.75H8.25H5.25V8.25Z" fill="#A8B64F" />
                </g>
                <defs>
                  <clipPath id="clip0_35_103">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Уменьшить</span>
            </button>

            <button onClick={() => { setOnChangeName(true); setTimeout(handleClickInputFocus, 200)}}  >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M10.545 6.765L11.235 7.455L4.44 14.25H3.75V13.56L10.545 6.765V6.765ZM13.245 2.25C13.0575 2.25 12.8625 2.325 12.72 2.4675L11.3475 3.84L14.16 6.6525L15.5325 5.28C15.825 4.9875 15.825 4.515 15.5325 4.2225L13.7775 2.4675C13.6275 2.3175 13.44 2.25 13.245 2.25V2.25ZM10.545 4.6425L2.25 12.9375V15.75H5.0625L13.3575 7.455L10.545 4.6425V4.6425Z" fill="#A8B64F" />
                </g>
                <defs>
                  <clipPath id="clip0_35_109">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Редактировать</span>
            </button>

            <button onClick={() => setIsModalOpened(true)}>
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 4.75V12.25H3V4.75H9ZM7.875 0.25H4.125L3.375 1H0.75V2.5H11.25V1H8.625L7.875 0.25ZM10.5 3.25H1.5V12.25C1.5 13.075 2.175 13.75 3 13.75H9C9.825 13.75 10.5 13.075 10.5 12.25V3.25Z" fill="#A8B64F" />
              </svg>
              <span>Удалить</span>
            </button>
          </div>
        )}
      </div>
      {isModalOpened && (
        <div className="modal" id="overlay">
          <div className="modal__block">
            <p>Удалить задачу?</p>
            <button className="modal__btn-delit" onClick={() => { removeTodo(todo.id); setIsModalOpened(false) }}>Удалить</button>
            <button className="modal__btn-cancel" onClick={() => setIsModalOpened(false)}>Отмена</button>
            <button className="modal__btn-close" onClick={() => setIsModalOpened(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9115 13.8058L6.84406 18.9567L4.96166 17.0433L10.0291 11.8924L5.0675 6.84914L6.85992 5.02721L11.8215 10.0705L16.7673 5.04334L18.6497 6.95672L13.7039 11.9839L18.6655 17.0272L16.8731 18.8491L11.9115 13.8058Z" fill="#C4C4C4" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );

};