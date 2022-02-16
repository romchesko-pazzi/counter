import React from 'react';
import s from "../ButtonNumber.module.css";

type propsType = {
    callBack: () => void;
    result: number;
}

export const ButtonReset = (props: propsType) => {

    const resetHandler = () => {
        props.callBack()
    }

    return (
        <button disabled={props.result === 0} className={s.butt} onClick={resetHandler}>RESET</button>
    );
};

