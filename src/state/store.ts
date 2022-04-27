import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";

export type RootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: counterReducer,
})


export const store = createStore(rootReducer);
