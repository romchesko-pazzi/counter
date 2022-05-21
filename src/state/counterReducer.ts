import {RootStateType} from "./store";
import {Dispatch} from "redux";

export enum ACTIONS_TYPE {
    SET_DISABLE_FOR_INC = "SET_DISABLE_FOR_INC",
    SET_DISABLE_FOR_RESET = "SET_DISABLE_FOR_RESET",
    SET_COUNTER_VALUE = "SET_COUNTER_VALUE",
    SET_START_VALUE = "SET_START_VALUE",
    SET_MAX_VALUE = "SET_MAX_VALUE",
    INC_VALUE = "INC_VALUE",
    GET_VALUE_FROM_LOCAL_STORAGE = "GET-VALUE-FROM-LOCAL-STORAGE",
}

export type ActionType =
    | SetDisableForIncType
    | SetCounterValueType
    | SetStartValueType
    | SetMaxValueType
    | SetDisableForResetType
    | IncValueType
    | SetValueToLocalStorageType;

type SetDisableForIncType = ReturnType<typeof setDisableForInc>
type SetDisableForResetType = ReturnType<typeof setDisableForReset>
type SetCounterValueType = ReturnType<typeof setCounterValue>
type SetStartValueType = ReturnType<typeof setStartValue>
type SetMaxValueType = ReturnType<typeof setMaxValue>
type IncValueType = ReturnType<typeof incValue>
type SetValueToLocalStorageType = ReturnType<typeof getValueFromLocalStorage>


type InitialStateType = {
    disableForInc: boolean
    counterValue: number | "Incorrect value!"
    startValue: number
    maxValue: number
    disableForReset: boolean
}

const initialState: InitialStateType = {
    disableForInc: true,
    disableForReset: true,
    counterValue: 0,
    startValue: 0,
    maxValue: 0,
}

export const counterReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_DISABLE_FOR_INC:
        case ACTIONS_TYPE.SET_DISABLE_FOR_RESET:
        case ACTIONS_TYPE.SET_START_VALUE:
        case ACTIONS_TYPE.SET_MAX_VALUE: {
            return {...state, ...action.payload}
        }
        case ACTIONS_TYPE.SET_COUNTER_VALUE: {
            return {...state, counterValue: action.payload.startValue}
        }
        case ACTIONS_TYPE.INC_VALUE: {
            return {
                ...state,
                counterValue: action.payload.value + 1
            }
        }
        case ACTIONS_TYPE.GET_VALUE_FROM_LOCAL_STORAGE: {
            return {...state, counterValue: action.payload.value}
        }
        default: {
            return state
        }
    }
}

export const incValue = (value: number) => {
    return {
        type: ACTIONS_TYPE.INC_VALUE,
        payload: {value}
    } as const
}

export const setCounterValue = (startValue: number | "Incorrect value!") => {
    return {
        type: ACTIONS_TYPE.SET_COUNTER_VALUE,
        payload: {startValue}
    } as const
}

export const setStartValue = (startValue: number) => {
    return {
        type: ACTIONS_TYPE.SET_START_VALUE,
        payload: {startValue}
    } as const
}

export const setMaxValue = (maxValue: number) => {
    return {
        type: ACTIONS_TYPE.SET_MAX_VALUE,
        payload: {maxValue}
    } as const
}

export const setDisableForInc = (disableForInc: boolean) => {
    return {
        type: ACTIONS_TYPE.SET_DISABLE_FOR_INC,
        payload: {disableForInc}
    } as const
}

export const setDisableForReset = (disableForReset: boolean) => {
    return {
        type: ACTIONS_TYPE.SET_DISABLE_FOR_RESET,
        payload: {disableForReset}
    } as const
}

export const getValueFromLocalStorage = (value: number) => {
    return {
        type: ACTIONS_TYPE.GET_VALUE_FROM_LOCAL_STORAGE,
        payload: {value},
    } as const
}


export const incValuesThunkCreator = (currentValue: number) => (dispatch: Dispatch) => {
    currentValue = currentValue + 1;
    localStorage.setItem("counterValue", currentValue.toString());
    dispatch(incValue(currentValue - 1));
}

export const getValueFromLocalStorageThunkCreator = () => (dispatch: Dispatch) => {
    let gettedValue = localStorage.getItem("counterValue");
    if (gettedValue) {
        let newValue = Number(gettedValue)
        dispatch(getValueFromLocalStorage(newValue))
    }
}


export const selectAll = (state: RootStateType) => state.counter;