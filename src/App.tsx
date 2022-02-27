import React, {useEffect, useState} from 'react';
import s from "./App.module.css";
import {Button} from "./components/Button/Button";
import {Display} from "./components/Display";
import {SettingsDisplay} from "./components/SettingsDisplay/SettingsDisplay";

function App() {

    const [num, setNum] = useState(0);
    const [startValue, setStartValue] = useState(0);
    const [title, setTitle] = useState("Set the values");
    const [maxValue, setMaxValue] = useState(0);
    const [disable, setDisable] = useState<boolean>(true);
    const [limit, setLimit] = useState(false);
    // useEffect(() => {
    //     let itemAsString = localStorage.getItem("key1");
    //     if (itemAsString) {
    //         setNum(JSON.parse(itemAsString));
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     localStorage.setItem("key1", JSON.stringify(num));
    // }, [num]);


    const setValues = (start: number, max: number) => {
        if (start < 0 || max < 0 || start > max || start === max) {
            setTitle("Incorrect value");
            setDisable(true);
            return
        }
        setDisable(false);
        setStartValue(start);
        setMaxValue(max);
        setNum(start);
    }

    const increment = () => {
        if (num === maxValue - 1) {
            setLimit(true);
            setDisable(true);
        }
        setNum(num + 1);
    }
    const reset = () => {
        setNum(startValue);
        setDisable(false);
        setLimit(false);
    }

    console.log(num, startValue, maxValue);
    return (
        <>
            <div className={s.counter}>
                <Display
                    title={title}
                    limit={limit}
                    num={num}
                    startValue={startValue}
                    maxValue={maxValue}/>
                <Button name={"inc"}
                        callBack={increment}
                        disabled={disable}/>
                <Button name={"reset"}
                        callBack={reset}
                        disabled={num === startValue}/>
            </div>
            <div className={s.settings}>
                <SettingsDisplay callBack={(start, max) => setValues(start, max)}/>
                {/*<Button callBack={setValue} name={"set"} disabled={false}/>*/}
            </div>
        </>
    );
}

export default App;