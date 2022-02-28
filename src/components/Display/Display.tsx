import React from "react";
import s from "./Display.module.css";

type DisplayPropsType = {
    title: string,
    num: number,
    limit: boolean,
    maxValue: number,
    startValue: number,
    titleState: boolean,
    incorrect:boolean,
}
export const Display = (props: DisplayPropsType) => {
    const {title, num, maxValue, startValue, limit, titleState,incorrect} = props;

    return (
        <div className={s.main}>
            <span
                className={limit ? s.limit : ""}>{titleState ? title : num}
            </span>
        </div>
    )
}