import React, {ChangeEvent, useState} from 'react';
import s from "./SettingsDisplay.module.css"
import {Button} from "../Button/Button";

export type SettingsDisplayPropsType = {
    callBack: (start: number, max: number) => void
}

export const SettingsDisplay = (props: SettingsDisplayPropsType) => {
    const {callBack} = props;

    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);

    const onChangeHandlerStart = (event: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(event.currentTarget.value));
    }
    const onChangeHandlerMax = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(event.currentTarget.value));
    }

    const setBothValues = (start: number, max: number) => {
        callBack(start, max);
    }
    return (
        <div className={s.main}>
            <div className={s.firstInput}>
                Max value : <input type={"number"}
                                   onChange={onChangeHandlerMax}/>
            </div>
            <span className={s.secondInput}>
                Start value : <input type={"number"}
                                     onChange={onChangeHandlerStart}/>
            </span>
            <div className={s.button}>
                <Button callBack={() => setBothValues(startValue, maxValue)} name={"set"} disabled={false}/>
            </div>
        </div>
    );
};