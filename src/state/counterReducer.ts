import {RootStateType} from "./store";

export enum ACTIONS_TYPE {
    SET_DISABLE_FOR_INC = "SET_DISABLE_FOR_INC",
    SET_DISABLE_FOR_RESET = "SET_DISABLE_FOR_RESET",
    SET_COUNTER_VALUE = "SET_COUNTER_VALUE",
    SET_START_VALUE = "SET_START_VALUE",
    SET_MAX_VALUE = "SET_MAX_VALUE",
    INC_VALUE = "INC_VALUE",
}

export type ActionType =
    | SetDisableForIncType
    | SetCounterValueType
    | SetStartValueType
    | SetMaxValueType
    | SetDisableForResetType
    | IncValueType;

type SetDisableForIncType = ReturnType<typeof setDisableForIncAC>
type SetDisableForResetType = ReturnType<typeof setDisableForResetAC>
type SetCounterValueType = ReturnType<typeof setCounterValueAC>
type SetStartValueType = ReturnType<typeof setStartValueAC>
type SetMaxValueType = ReturnType<typeof setMaxValueAC>
type IncValueType = ReturnType<typeof incValueAC>

// type IncValueType = {
//     type:ACTIONS_TYPE.INC_VALUE
// }
//
// type SetDisableForIncType = {
//     type:ACTIONS_TYPE.SET_DISABLE_FOR_INC
//     payload:{disableForInc:boolean}
// }
//
// type SetCounterValueType = {
//     type:ACTIONS_TYPE.SET_COUNTER_VALUE
//     payload:{startValue: number | "Incorrect value!"}
// }
//
// type SetStartValueType = {
//     type:ACTIONS_TYPE.SET_START_VALUE
//     payload:{startValue: number}
// }
//
// type SetMaxValueType = {
//     type:ACTIONS_TYPE.SET_MAX_VALUE
//     payload:{maxValue: number}
// }
//
// type SetDisableForResetType = {
//     type:ACTIONS_TYPE.SET_DISABLE_FOR_RESET
//     payload:{disableForReset:boolean}
// }


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
        default: {
            return state
        }
    }
}

export const incValueAC = (value: number) => {
    return {
        type: ACTIONS_TYPE.INC_VALUE,
        payload: {value}
    } as const
}

export const setCounterValueAC = (startValue: number | "Incorrect value!") => {
    return {
        type: ACTIONS_TYPE.SET_COUNTER_VALUE,
        payload: {startValue}
    } as const
}

export const setStartValueAC = (startValue: number) => {
    return {
        type: ACTIONS_TYPE.SET_START_VALUE,
        payload: {startValue}
    } as const
}

export const setMaxValueAC = (maxValue: number) => {
    return {
        type: ACTIONS_TYPE.SET_MAX_VALUE,
        payload: {maxValue}
    } as const
}

export const setDisableForIncAC = (disableForInc: boolean) => {
    return {
        type: ACTIONS_TYPE.SET_DISABLE_FOR_INC,
        payload: {disableForInc}
    } as const
}

export const setDisableForResetAC = (disableForReset: boolean) => {
    return {
        type: ACTIONS_TYPE.SET_DISABLE_FOR_RESET,
        payload: {disableForReset}
    } as const
}

export const selectAll = (state: RootStateType) => state.counter;