
export enum FilialsDataActionTypes {
    FETCH_FILIALS_DATA = 'FETCH_FILIALS_DATA',
    FETCH_FILIALS_DATA_SUCCESS = 'FETCH_FILIALS_DATA_SUCCESS',
    FETCH_FILIALS_DATA_ERROR = 'FETCH_FILIALS_DATA_ERROR',
}

interface FetchFilialsDataAction {
    type: FilialsDataActionTypes.FETCH_FILIALS_DATA;
}

interface FetchFilialsDataSuccessAction {
    type: FilialsDataActionTypes.FETCH_FILIALS_DATA_SUCCESS;
    payload: {
        max_pages: number,
        data: FilialData[]
    };
}

interface FetchFilialsDataErrorAction {
    type: FilialsDataActionTypes.FETCH_FILIALS_DATA_ERROR;
    payload: string;
}

export type FilialsDataAction = FetchFilialsDataAction | FetchFilialsDataSuccessAction | FetchFilialsDataErrorAction;

export interface FilialsDataState {
    filialsData: {
        max_pages: number,
        data: FilialData[]
    };
    loading: boolean;
    error: null | string;
}

interface FilialData {
    id: number,
    name: string,
    filial: {
        id: number,
        name: string
    },
    tt: {
        id: number,
        name: string
    },
    active: true,
    export: string[],
}