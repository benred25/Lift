import {CREATE_GOAL, DELETE_GOAL, UPDATE_GOAL, FETCH_ALL_GOALS, COMPLETE_GOAL} from "../constants/actionTypes";

import * as api from '../api/index.js';

export const getGoals = () => async (dispatch) => {
    try {
        const { data } = await api.fetchGoals();
        dispatch({ type: FETCH_ALL_GOALS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createGoal = (goal) => async (dispatch) => {
    try {
        const { data } = await api.createGoal(goal);
        dispatch({ type: CREATE_GOAL, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const completeGoal = (id) => async (dispatch) => {
    try {
        const { data } = await api.completeGoal(id);
        dispatch({ type: COMPLETE_GOAL, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deleteGoal = (id) => async (dispatch) => {
    try {
        await api.deleteGoal(id);
        dispatch({ type: DELETE_GOAL, payload: id });
    } catch (error) {
        console.log(error);
    }
};

export const updateGoal = (id, goal) => async (dispatch) => {
    try {
        const { data } = await api.updateGoal(id, goal);
        dispatch({ type: UPDATE_GOAL, payload: data });
    } catch (error) {
        console.log(error);
    }
};