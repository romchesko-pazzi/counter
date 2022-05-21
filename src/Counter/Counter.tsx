import React, {useEffect} from 'react';
import s from "./Counter.module.css";
import {Button} from "../components/Button/Button"
import {Display} from "../components/Display/Display";
import {SettingsDisplay} from "../components/SettingsDisplay/SettingsDisplay";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {
    ActionType, getValueFromLocalStorageThunkCreator, incValue, incValuesThunkCreator,
    selectAll,
    setCounterValue,
    setDisableForInc,
    setDisableForReset,
    setMaxValue,
    setStartValue,
} from "../state/counterReducer";

export const Counter = React.memo(() => {
    // const dispatch = useDispatch<Dispatch<ActionType>>();
    const dispatch = useDispatch();
    const {counterValue, maxValue, startValue, disableForInc, disableForReset} = useSelector(selectAll);

    useEffect(() => {
        dispatch(getValueFromLocalStorageThunkCreator())
    }, []);



    const setValues = (start: number, max: number) => {
        if (start < max && Number.isInteger(start) && Number.isInteger(max)) {
            dispatch(setDisableForInc(false));
            dispatch(setStartValue(start));
            dispatch(setCounterValue(start));
            dispatch(setMaxValue(max));
        } else {
            dispatch(setCounterValue("Incorrect value!"));
            dispatch(setDisableForInc(true));
        }
    }

    const increment = () => {
        if (counterValue === maxValue - 1) {
            dispatch(setDisableForInc(true));
            dispatch(setDisableForReset(false));
        }
        if (typeof counterValue === "number") {
            dispatch(setCounterValue(counterValue));
            dispatch(incValuesThunkCreator(counterValue));
            dispatch(setDisableForReset(false));
        }
    }

    const reset = () => {
        dispatch(setCounterValue(startValue));
        dispatch(setDisableForReset(true));
        dispatch(setDisableForInc(false));
    }
    return (
        <div className={s.main}>
            <div className={s.counter}>
                <Display counterValue={counterValue} maxValue={maxValue}/>
                <Button name={"inc"} callBack={increment} disabled={disableForInc}/>
                <Button name={"reset"} callBack={reset} disabled={disableForReset}/>
            </div>
            <div className={s.settings}>
                <SettingsDisplay callBack={(start, max) => setValues(start, max)}/>
            </div>
        </div>
    );
});
