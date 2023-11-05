export interface FilialsState {
    filials: FilialState[];
    loading: boolean;
    error: null | string;
}

export interface FilialState {
    id: number,
    name: string
}

export enum FilialsActionTypes {
    FETCH_FILIALS = 'FETCH_FILIALS',
    FETCH_FILIALS_SUCCESS = 'FETCH_FILIALS_SUCCESS',
    FETCH_FILIALS_ERROR = 'FETCH_FILIALS_ERROR',
}

interface FetchFilialsAction {
    type: FilialsActionTypes.FETCH_FILIALS;
}

interface FetchFilialsSuccessAction {
    type: FilialsActionTypes.FETCH_FILIALS_SUCCESS;
    payload: any[];
}

interface FetchFilialsErrorAction {
    type: FilialsActionTypes.FETCH_FILIALS_ERROR;
    payload: string;
}

export type FilialsAction = FetchFilialsAction | FetchFilialsSuccessAction | FetchFilialsErrorAction;
