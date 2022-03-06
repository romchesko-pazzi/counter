import React from 'react';
import s from "./Button.module.css"

type PropsType = {
    callBack: () => void,
    name: string,
    disabled: boolean,
}

export const Button: React.FC<PropsType> = ({callBack, name, disabled}) => {

    const onClickHanlder = () => {
        callBack()
    }

    return (
        <div className={s.mainButton}>
            <button className={disabled ? s.buttError : s.butt} disabled={disabled}
                    onClick={onClickHanlder}>{name}</button>
        </div>
    );
};