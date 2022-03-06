import React, {useEffect, useState} from 'react';
import s from "./App.module.css";
import {Button} from "./components/Button/Button";
import {Display} from "./components/Display/Display";
import {SettingsDisplay} from "./components/SettingsDisplay/SettingsDisplay";

function App() {

    const [counterValue, setCounterValue] = useState<number | "Incorrect value!">(0);
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [disableForInc, setDisableForInc] = useState<boolean>(true);
    const [disableForReset, setDisableForReset] = useState<boolean>(true);

    useEffect(() => {
        let gettedValue = localStorage.getItem("startValueApp");
        if (gettedValue) {
            setCounterValue(Number(gettedValue));

        }
    }, []);

    useEffect(() => {
        localStorage.setItem("startValueApp", startValue.toString());
        setDisableForInc(false);
    }, [startValue]);

    const setValues = (start: number, max: number) => {
        if (start < max && start >= 0 && max > 0) {
            setDisableForInc(false);
            setCounterValue(start);
            setStartValue(start);
            setMaxValue(max);
        } else {
            setCounterValue("Incorrect value!");
            setDisableForInc(true);
        }
    }

    const increment = () => {
        if (counterValue === maxValue - 1) {
            setDisableForInc(true);
            setDisableForReset(false);
        }
        if (typeof counterValue === "number") {
            setCounterValue(counterValue + 1);
            setDisableForReset(false)
        }
    }

    const reset = () => {
        setCounterValue(startValue);
        setDisableForReset(true);
        setDisableForInc(false);
    }

    return (
        <div className={s.main}>
            <div className={s.counter}>
                <Display
                    counterValue={counterValue}
                    maxValue={maxValue}
                />
                <Button name={"inc"}
                        callBack={increment}
                        disabled={disableForInc}/>
                <Button name={"reset"}
                        callBack={reset}
                        disabled={disableForReset}/>
            </div>
            <div className={s.settings}>
                <SettingsDisplay
                    callBack={(start, max) => setValues(start, max)}
                />
            </div>
        </div>
    );
}

export default App;