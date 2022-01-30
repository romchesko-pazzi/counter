import React, {useState} from 'react';
import './App.css';
import s from "./App.module.css";
import {Button} from "./components/ButtonInc";
import {ButtonReset} from "./components/ButtonReset";

function App() {

    const [num, setNum] = useState(0);

    const increment = () => {
        setNum(num + 1);
    }

    const reset = () => {
        setNum(0)
    }

    return (
        <div className={s.main}>
            <Button increment={increment} result={num}/>
            <ButtonReset reset={reset} result={num}/>
        </div>
    );
}

export default App;