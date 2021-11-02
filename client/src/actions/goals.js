import {CREATE, DELETE, UPDATE, FETCH_ALL, COMPLETE} from "../constants/actionTypes";

import * as api from '../api/index.js';

export const getGoals = () => async (dispatch) => {
    try {
        const { data } = await api.fetchGoals();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createGoal = (goal) => async (dispatch) => {
    try {
        const { data } = await api.createGoal(goal);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const completeGoal = (id) => async (dispatch) => {
    try {
        const { data } = await api.completeGoal(id);
        dispatch({ type: COMPLETE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deleteGoal = (id) => async (dispatch) => {
    try {
        await api.deleteGoal(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
};