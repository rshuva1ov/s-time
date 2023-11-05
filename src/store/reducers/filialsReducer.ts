import { FilialsAction, FilialsState, FilialsActionTypes } from "../../types/filials"

const initialState: FilialsState = {
    filials: [],
    loading: false,
    error: null,
}

export const filialsReducer = (state = initialState, action: FilialsAction): FilialsState => {
    switch (action.type) {
        case FilialsActionTypes.FETCH_FILIALS:
            return { loading: true, error: null, filials: [] }
        case FilialsActionTypes.FETCH_FILIALS_SUCCESS:
            return { loading: false, error: null, filials: action.payload }
        case FilialsActionTypes.FETCH_FILIALS_ERROR:
            return { loading: false, error: action.payload, filials: [] }
        default:
            return state;
    }
}