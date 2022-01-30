import React from 'react';
import s from "../ButtonNumber.module.css"
import {MouseEvent} from "react";

type propsType = {
    increment: (value: number) => void;
    result: number;
}

export const Button = (props: propsType) => {

    const onClickHanlder = (event: MouseEvent) => {
        props.increment(event.button)
    }

    return (
        <div>
            <div className={s.number}>
                <div className={props.result > 4 ? s.limit : ""}>
                    {props.result}
                </div>
            </div>
            <button className={s.butt} disabled={props.result > 4} onClick={onClickHanlder}>INC</button>
        </div>
    );
};