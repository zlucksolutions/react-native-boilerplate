import * as types from '../types/detailsType';
import { UserDetails } from '../../api/types/types';

export const goToDetails = (payload: UserDetails): types.DetailsActions => ({
    type: types.GO_TO_DETAILS,
    payload
});