import React from 'react';
import {MouseEvent} from "react";
import s from "../ButtonNumber.module.css"

type propsType = {
    reset: (event: number) => void;
    result: number;
}

export const ButtonReset = (props: propsType) => {

    const resetHandler = (event: MouseEvent) => {
        props.reset(event.button)
    }

    return (
        <button disabled={props.result === 0} className={s.butt} onClick={resetHandler}>RESET</button>
    );
};

