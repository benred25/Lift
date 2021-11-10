import { FETCH_ALL_USERS, FETCH_CURRENT_USER} from "../constants/actionTypes";

import * as api from '../api/index.js';

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();
        dispatch({ type: FETCH_ALL_USERS, payload: data});
    } catch (error) {
        console.log(error);
    }
};