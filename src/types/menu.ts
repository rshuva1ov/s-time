export enum MenuActionTypes {
    SET_MENU = 'SET_MENU',
    SET_MENU_CHANGE = 'SET_MENU_CHANGE',
}

export interface MenuState {
    menu: boolean
}

export type MenuAction = SetMenuAction | SetMenuChangeAction;

interface SetMenuAction {
    type: MenuActionTypes.SET_MENU
}

interface SetMenuChangeAction {
    type: MenuActionTypes.SET_MENU_CHANGE,
    payload: boolean
}


