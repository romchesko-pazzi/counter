import React from 'react';
import s from "./Button.module.css"

type PropsType = {
    callBack: () => void,
    result?: number,
    name: string,
    disabled: boolean,
}

export const Button: React.FC<PropsType> = ({callBack, result, name, disabled}) => {

    const onClickHanlder = () => {
        callBack()
    }

    return (
        <div className={s.mainButton}>
            <button className={s.butt} disabled={disabled}
                    onClick={onClickHanlder}>{name}</button>
        </div>
    );
};