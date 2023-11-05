
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
    payload: FilialData[];
}

interface FetchFilialsDataErrorAction {
    type: FilialsDataActionTypes.FETCH_FILIALS_DATA_ERROR;
    payload: string;
}

export type FilialsDataAction = FetchFilialsDataAction | FetchFilialsDataSuccessAction | FetchFilialsDataErrorAction;

export interface FilialsDataState {
    filialsData: FilialData[];
    loading: boolean;
    error: null | string;
}

interface FilialData {
    max_pages: number,
    data: [
        {
            id: 0,
            name: string,
            filial: {
                id: 0,
                name: string
            },
            tt: {
                id: 0,
                name: string
            },
            active: true,
            export: [
                string
            ]
        }
    ]
}