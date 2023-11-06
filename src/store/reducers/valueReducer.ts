import { ValueAction, ValueActionTypes, ValueState } from "../../types/value";



const initialState: ValueState = {
    value: 0,
}

export const valueReducer = (state = initialState, action: ValueAction): ValueState => {
    switch (action.type) {
        case ValueActionTypes.SET_VALUE_CHANGE:
            return {
                ...state,
                value: action.payload,
            };
        default:
            return state;
    }
}