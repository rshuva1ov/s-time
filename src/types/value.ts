export enum ValueActionTypes {
    SET_VALUE = 'SET_VALUE',
    SET_VALUE_CHANGE = 'SET_VALUE_CHANGE',
}

export interface ValueState {
    value: number
}

export type ValueAction = SetValueChangeAction;

interface SetValueChangeAction {
    type: ValueActionTypes.SET_VALUE_CHANGE,
    payload: number
}


