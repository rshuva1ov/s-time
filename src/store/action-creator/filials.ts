import axios from "axios";
import { Dispatch } from "redux";
import { FilialsAction, FilialsActionTypes } from "../../types/filials";
import { MenuActionTypes } from "../../types/menu";
import { FilialsDataAction, FilialsDataActionTypes } from "../../types/filialsData";
import { ValueActionTypes } from "../../types/value";

export const fetchFilials = (): (dispatch: Dispatch<FilialsAction>) => Promise<void> => {
    return async (dispatch: Dispatch<FilialsAction>) => {
        try {
            dispatch({ type: FilialsActionTypes.FETCH_FILIALS });
            const response = await axios.get('https://testjob.checkport.ru/filial/');
            dispatch({ type: FilialsActionTypes.FETCH_FILIALS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({
                type: FilialsActionTypes.FETCH_FILIALS_ERROR,
                payload: 'Произошла ошибка при загрузке'
            })
        }
    }
}

export function setMenu() {
    return {
        type: MenuActionTypes.SET_MENU,
    };
}

export function setMenuChange(payload: boolean) {
    return {
        type: MenuActionTypes.SET_MENU_CHANGE,
        payload,
    };
}

export const fetchFilialsData = (id: number | null, currentPage: number | string): (dispatch: Dispatch<FilialsDataAction>) => Promise<void> => {
    return async (dispatch: Dispatch<FilialsDataAction>) => {
        if (id === 0) {
            return
        }
        try {
            dispatch({ type: FilialsDataActionTypes.FETCH_FILIALS_DATA });
            const response = await axios.get(`https://testjob.checkport.ru/filial/${id}/menu/?page=${currentPage}`);
            dispatch({ type: FilialsDataActionTypes.FETCH_FILIALS_DATA_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({
                type: FilialsDataActionTypes.FETCH_FILIALS_DATA_ERROR,
                payload: 'Произошла ошибка при загрузке'
            })
        }
    }
}

export function setValueChange(payload: number) {
    return {
        type: ValueActionTypes.SET_VALUE_CHANGE,
        payload,
    };
}