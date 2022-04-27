import React from 'react';
import s from "./Counter.module.css";
import {Button} from "../components/Button/Button"
import {Display} from "../components/Display/Display";
import {SettingsDisplay} from "../components/SettingsDisplay/SettingsDisplay";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {
    ActionType,
    selectAll,
    setCounterValueAC,
    setDisableForIncAC,
    setDisableForResetAC,
    setMaxValueAC,
    setStartValueAC
} from "../state/counterReducer";

export const Counter = () => {


    const dispatch = useDispatch<Dispatch<ActionType>>()
    const {counterValue, maxValue, startValue, disableForInc, disableForReset} = useSelector(selectAll);


    // useEffect(() => {
    //     let gettedValue = localStorage.getItem("startValueApp");
    //     if (gettedValue) {
    //         setCounterValue(Number(gettedValue));
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     localStorage.setItem("startValueApp", startValue.toString());
    //     setDisableForInc(false);
    // }, [startValue]);

    const setValues = (start: number, max: number) => {
        if (start < max && Number.isInteger(start) && Number.isInteger(max)) {
            dispatch(setDisableForIncAC(false));
            dispatch(setStartValueAC(start));
            dispatch(setCounterValueAC(start));
            dispatch(setMaxValueAC(max));
        } else {
            dispatch(setCounterValueAC("Incorrect value!"));
            dispatch(setDisableForIncAC(true));
        }
    }

    const increment = () => {
        if (counterValue === maxValue - 1) {
            dispatch(setDisableForIncAC(true));
            dispatch(setDisableForResetAC(false));
        }
        if (typeof counterValue === "number") {

            dispatch(setCounterValueAC(counterValue+1));
            dispatch(setDisableForResetAC(false));
        }
    }

    const reset = () => {
        dispatch(setCounterValueAC(startValue));
        dispatch(setDisableForResetAC(true));
        dispatch(setDisableForIncAC(false));
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
};
