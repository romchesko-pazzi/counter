import React from "react";
import s from "./Display.module.css";

type DisplayPropsType = {
    counterValue: number | "Incorrect value!",
    maxValue: number,
}

export const Display = (props: DisplayPropsType) => {
    const {counterValue, maxValue} = props;


    return (
        <div className={s.main}>
            <span
                className={counterValue === "Incorrect value!" || counterValue === maxValue ? s.limit : ""}>{counterValue}
            </span>
        </div>
    )
}