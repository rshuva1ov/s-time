import { MenuAction, MenuActionTypes, MenuState } from "../../types/menu";

const initialState: MenuState = {
    menu: false,
}

export const menuReducer = (state = initialState, action: MenuAction): MenuState => {
    switch (action.type) {
        case MenuActionTypes.SET_MENU:
            return {
                ...state
            };
        case MenuActionTypes.SET_MENU_CHANGE:
            return {
                ...state,
                menu: action.payload,
            };
        default:
            return state;
    }
}