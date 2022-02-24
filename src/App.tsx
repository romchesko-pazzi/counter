import React, {useState} from 'react';
import s from "./App.module.css";
import {Button} from "./components/Button/Button";
import {Display} from "./components/Display";
import {SettingsDisplay} from "./components/SettingsDisplay/SettingsDisplay";

function App() {

    const [num, setNum] = useState(0);

    const increment = () => {
        setNum(num + 1);
    }

    const reset = () => {
        setNum(0);
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem("counterKey", JSON.stringify(num));
        localStorage.setItem("counterKey1", JSON.stringify(num + 2));
        localStorage.setItem("counterKey2", JSON.stringify(num + 4));
    }

    const getFromLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem("counterKey");
        if (valueAsString) {
            let valueAsNumber = JSON.parse(valueAsString);
            setNum(valueAsNumber);
        }
    }

    const clearLocalStorageHandler = () => {
        localStorage.clear();
        setNum(0);
    }

    return (
        <div className={s.main}>
            <div className={s.counter}>
                <Display result={num}/>
                <Button name={"inc"} callBack={increment} disabled={num > 40} result={num}/>
                <Button name={"reset"} callBack={reset} disabled={num === 0} result={num}/>
                <Button callBack={setToLocalStorageHandler} name={"setToLocalStorage"} disabled={false}/>
                <Button callBack={getFromLocalStorageHandler} name={"getFromLocalStorage"} disabled={false}/>
                <Button callBack={clearLocalStorageHandler} name={"clearLocalStorage"} disabled={false}/>
            </div>
            {/*<div className={s.settings}>*/}
            {/*    <SettingsDisplay/>*/}
            {/*    <Button callBack={() => setNum} result={5} name={"set"} disabled={true}/>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;