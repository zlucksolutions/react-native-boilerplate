import { InitApp } from '../../api/types/types';
export const INIT_APP = 'INIT_APP';
export const SET_LAST_BACK_TIME = 'SET_LAST_BACK_TIME';

type SetInitAppAction = {
    type: typeof INIT_APP;
    payload: InitApp;
};

export type InitAppActions = SetInitAppAction;
export type InitAppState = {
    name: '' | InitApp;
};