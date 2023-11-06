import { FilialsDataAction, FilialsDataActionTypes, FilialsDataState } from "../../types/filialsData"

const initialState: FilialsDataState = {
    filialsData: {
        max_pages: 1,
        data: [],
    },
    loading: false,
    error: null,
}

export const filialsDataReducer = (state = initialState, action: FilialsDataAction): FilialsDataState => {
    switch (action.type) {
        case FilialsDataActionTypes.FETCH_FILIALS_DATA:
            return {
                ...state,
            }
        case FilialsDataActionTypes.FETCH_FILIALS_DATA_SUCCESS:
            return { loading: false, error: null, filialsData: action.payload }
        case FilialsDataActionTypes.FETCH_FILIALS_DATA_ERROR:
            return {
                loading: false, error: action.payload, filialsData: {
                    max_pages: 1,
                    data: []
                }
            }
        default:
            return state;
    }
}