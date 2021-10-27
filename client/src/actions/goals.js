import { CREATE, DELETE, UPDATE, FETCH_ALL } from "../constants/actionTypes";

import * as api from '../api/index.js';

export const getGoals = () => async (dispatch) => {
    try {
        const { data } = await api.fetchGoals();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}