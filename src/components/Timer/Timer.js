import React, { useEffect, useRef, useState } from "react";
import "./timer.css";
import { useStoreState } from "easy-peasy";
import { useStoreActions } from "easy-peasy";


export function Timer() {

    const numberOfItems = useStoreState((state) => state.todoModel.numberOfItems);
    const todos = useStoreState((state) => state.todoModel.todos);
    // const workMinutes = useStoreState((state) => state.todoModel.workMinutes);
    // const breakMinutes = useStoreState((state) => state.todoModel.breakMinutes);


    const [typeInterval, setTypeInterval] = useState('Помидор');

    const [countTask, setCountTask] = useState(1);

    const baseValueWorkMinutes = 0.25;
    const breakMinutes = 0.25;

    const [workMinutes, setWorkMinutes] = useState(baseValueWorkMinutes);

    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState('work');
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [baseState, setBaseState] = useState('waiting');

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);
    const countRef = useRef(countTask);


    function plusMinutes() {
        setWorkMinutes((secondsLeftRef.current / 60) + 1)
    }

    function tick() {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
    }


    useEffect(() => {

        let count = todos.length > 0 ? todos[0].count : 1;

        function setCount() {

            console.log(count, todos.length)
            if (count >= countRef.current) {
                countRef.current++;
                setCountTask(countRef.current);
            }
            return;
        }

        function switchMode() {
            const nextMode = modeRef.current === 'work' ? 'break' : 'work';
            const nextSeconds = (nextMode === 'work' ? workMinutes : breakMinutes) * 60;

            setMode(nextMode);
            modeRef.current = nextMode;

            setSecondsLeft(nextSeconds);
            secondsLeftRef.current = nextSeconds;

            if (nextMode === 'work') {
                setTypeInterval('Помидор');
            } else {
                setTypeInterval('Перерыв');
            }

        }

        secondsLeftRef.current = workMinutes * 60;
        setSecondsLeft(secondsLeftRef.current);

        const interval = setInterval(() => {
            if (isPausedRef.current) {

                return;
            }
            if (secondsLeftRef.current === 0) {

                return [switchMode(), setCount()]
            }

            tick();
        }, 1000);

        return () => clearInterval(interval);
    }, [workMinutes, breakMinutes, todos]);



    const totalSeconds = mode === 'work'
        ? workMinutes * 60
        : breakMinutes * 60;
    const percentage = Math.round(secondsLeft / totalSeconds * 100);

    let minutes = Math.floor(secondsLeft / 60);
    if (minutes < 10) minutes = '0' + minutes;
    let seconds = (secondsLeft % 60).toFixed(0);
    if (seconds < 10) seconds = '0' + seconds;

    return (
        <div className={`timer ${modeRef.current} ${baseState} ${isPausedRef.current === true ? "paused" : ""}`}>
            {numberOfItems !== 0 && (
                <div className="timer__wrap">
                    <div className="timer__top">
                        <p>{todos[0]?.task}</p>
                        <span>{`${typeInterval} ${countTask}`}</span>
                    </div>
                    <div className="timer__clock">
                        <span>{`${minutes}:${seconds}`}</span>
                        <button onClick={() => plusMinutes()}>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="25" fill="#C4C4C4" />
                                <path d="M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z" fill="white" />
                            </svg>
                        </button>
                    </div>

                    <div className="timer__handlers">
                        <div>
                            {baseState === 'waiting' && (
                                <button className="timer__btn-start" onClick={() => { setBaseState('starting'); setIsPaused(false); isPausedRef.current = false; }}>Старт</button>

                            )}

                        </div>

                        <div> {baseState === 'starting' &&
                            (isPaused
                                ? <button className="timer__btn-start" onClick={() => { setIsPaused(false); isPausedRef.current = false; }}>Продолжить</button>
                                : <button className="timer__btn-start" onClick={() => { setIsPaused(true); isPausedRef.current = true; }}>Пауза</button>)
                        }
                        </div>

                        <div> {isPaused && baseState === 'starting'
                            ? <button className="timer__btn-ready" onClick={() => { isPausedRef.current = true; setBaseState('waiting'); setIsPaused(true); setSecondsLeft(baseValueWorkMinutes * 60); secondsLeftRef.current = workMinutes * 60 ; setWorkMinutes(baseValueWorkMinutes)}}>Сделано</button>
                            : <button className="timer__btn-stop" onClick={() => { isPausedRef.current = true; setBaseState('waiting'); setIsPaused(true); setSecondsLeft(baseValueWorkMinutes * 60); secondsLeftRef.current = workMinutes * 60 ; setCountTask(1); setWorkMinutes(baseValueWorkMinutes)}}>Стоп</button>
                        }
                        </div>

                    </div>
                </div>
            )}

            {numberOfItems === 0 && (<div className="timer__no-active">
                <p>Задач пока нет.</p>
                <p>Пора добавить задачу!</p>
            </div>)}

        </div>
    );
}
