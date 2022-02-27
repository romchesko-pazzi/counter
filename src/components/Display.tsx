import React from "react";
import s from "./Display.module.css";

type PropsType = {
    title: string,
    num: number,
    limit: boolean,
    maxValue: number,
    startValue: number,
}
export const Display = (props: PropsType) => {
    const {title, num, maxValue, startValue, limit} = props;

    return (
        <div className={s.main}>
            <span className={limit ? s.limit : ""}>{maxValue === 0 ? title : num}</span>
        </div>
    )
}