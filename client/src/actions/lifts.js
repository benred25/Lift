import {CREATE, FETCH_ALL} from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getLifts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchLifts();
        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error);
    }
};