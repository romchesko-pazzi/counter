import React from "react";
import s from "./Display.module.css";

type PropsType = {
    result: number,
}
export const Display: React.FC<PropsType> = ({result}) => {
    return (
        <div className={s.main}>
            <div className={result > 4 ? s.limit : ""}>
                {result}
            </div>
        </div>
    )
}