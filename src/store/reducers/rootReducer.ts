import { combineReducers } from "redux";
import { filialsReducer } from "./filialsReducer";
import { menuReducer } from "./menuReducer";
import { filialsDataReducer } from "./filialsDataReducer";
import { valueReducer } from "./valueReducer";

export type RootState = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    filials: filialsReducer,
    menu: menuReducer,
    filialsData: filialsDataReducer,
    value: valueReducer,
})