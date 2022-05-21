import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import s from "./SettingsDisplay.module.css"
import {Button} from "../Button/Button";

export type SettingsDisplayPropsType = {
    callBack: (start: number, max: number) => void
}

export const SettingsDisplay: React.FC<SettingsDisplayPropsType> = React.memo((props) => {
    const {callBack} = props;

    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);

    // useEffect(() => {
    //     let startValue = localStorage.getItem("startValue");
    //     let maxValue = localStorage.getItem("maxValue");
    //     if (maxValue && startValue) {
    //         setStartValue(Number(startValue));
    //         setMaxValue(Number(maxValue));
    //     }
    // }, []);
    // useEffect(() => {
    //     localStorage.setItem("startValue", startValue.toString());
    // }, [startValue]);
    //
    // useEffect(() => {
    //     localStorage.setItem("maxValue", maxValue.toString());
    // }, [maxValue]);

    const onChangeHandlerStart = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(event.currentTarget.value));
    }, []);

    const onChangeHandlerMax = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(event.currentTarget.value));
    }, []);

    const setBothValues = useCallback((start: number, max: number) => {
        callBack(start, max);
    }, [callBack]);

    return (
        <div className={s.main}>
            <div className={s.firstInput}>
                Max value : <input value={maxValue} min={0} onChange={onChangeHandlerMax}/>
            </div>
            <span className={s.secondInput}>
                Start value : <input value={startValue} min={0} onChange={onChangeHandlerStart}/>
            </span>
            <div className={s.button}>
                <Button callBack={() => setBothValues(startValue, maxValue)} name={"set"}
                        disabled={false}/>
            </div>
        </div>
    );
});