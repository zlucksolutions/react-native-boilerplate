import { UserDetails } from '../../api/types/types';
export const GO_TO_DETAILS = 'GO_TO_DETAILS';

type SetDetailsAction = {
    type: typeof GO_TO_DETAILS;
    payload: UserDetails;
};

export type DetailsActions =  SetDetailsAction;

export type DetailsState = {
    user: {} | UserDetails;
};