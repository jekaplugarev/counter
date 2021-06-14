import style from '../App.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

export type ControlBtnType = {
    changeCounter: (counter: number) => void
    resetCounter: () => void
    count: number
    maxValue: number
    startValue: number
}

export function ControlBtn(props: ControlBtnType) {
    const changeCounter = () => props.changeCounter(props.count)
    const resetCounter = () => props.resetCounter()

    return (
        <div className={style.wrapperBtn}>
            <button
                className={style.btn}
                onClick={changeCounter}
                disabled={props.count === props.maxValue}>Inc
            </button>
            <button
                className={style.btn}
                onClick={resetCounter}
                disabled={props.count === props.startValue}>Reset
            </button>
            <button className={style.btn}>
                <NavLink to="/set" className={style.link}>
                    Set
                </NavLink>
            </button>
        </div>
    )
}