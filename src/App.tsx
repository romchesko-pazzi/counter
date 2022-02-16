import React, {useState} from 'react';
import s from "./App.module.css";
import {Button} from "./components/Button/Button";
import {Display} from "./components/Display";

function App() {

    const [num, setNum] = useState(0);

    const increment = () => {
        setNum(num + 1);
    }

    const reset = () => {
        setNum(0);
    }

    return (
        <div className={s.main}>
            <Display result={num}/>
            <Button name={"INC"} callBack={increment} disabled={num > 4} result={num}/>
            <Button name={"RESET"} callBack={reset} disabled={num === 0} result={num}/>
        </div>
    );
}

export default App;