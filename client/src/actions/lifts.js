import {CREATE_LIFT, DELETE_LIFT, FETCH_ALL_LIFTS} from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getLifts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchLifts();
        dispatch({ type: FETCH_ALL_LIFTS, payload: data});
    } catch (error) {
        console.log(error);
    }
};

export const createLift = (lift) => async (dispatch) => {
    try {
        const { data } = await api.createLift(lift);
        dispatch({ type: CREATE_LIFT, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deleteLift = (id) => async (dispatch) => {
    try {
        await api.deleteLift(id);
        dispatch({ type: DELETE_LIFT, payload: id });
    } catch (error) {
        console.log(error);
    }
};