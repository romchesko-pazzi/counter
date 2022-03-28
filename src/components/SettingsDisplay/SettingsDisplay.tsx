import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./SettingsDisplay.module.css"
import {Button} from "../Button/Button";

export type SettingsDisplayPropsType = {
    callBack: (start: number, max: number) => void
}

export const SettingsDisplay = (props: SettingsDisplayPropsType) => {

    const {callBack} = props;

    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);

    useEffect(() => {
        let startValue = localStorage.getItem("startValue");
        let maxValue = localStorage.getItem("maxValue");
        if (maxValue && startValue) {
            setStartValue(Number(startValue));
            setMaxValue(Number(maxValue));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("startValue", startValue.toString());
    }, [startValue]);

    useEffect(() => {
        localStorage.setItem("maxValue", maxValue.toString());
    }, [maxValue]);


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
                Max value : <input value={maxValue} type={"number"} min={0} onChange={onChangeHandlerMax}/>
            </div>
            <span className={s.secondInput}>
                Start value : <input value={startValue} type={"number"} min={0} onChange={onChangeHandlerStart}/>
            </span>
            <div className={s.button}>
                <Button callBack={() => setBothValues(startValue, maxValue)} name={"set"}
                        disabled={false}/>
            </div>
        </div>
    );
};