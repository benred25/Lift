import { CREATE_GOAL, UPDATE_GOAL, DELETE_GOAL, FETCH_ALL_GOALS, COMPLETE_GOAL } from "../constants/actionTypes";

export default (goals = [], action) => {
    switch (action.type) {
        case FETCH_ALL_GOALS:
            return action.payload;
        case CREATE_GOAL:
            return [...goals, action.payload];
        case COMPLETE_GOAL:
            return goals.map((goal) => (goal._id === action.payload._id ? action.payload : goal));
        case DELETE_GOAL:
            return goals.filter((goal) => goal._id !== action.payload);
        case UPDATE_GOAL:
            return goals.map((goal) => (goal._id === action.payload._id ? action.payload : goal));
        default:
            return goals;
    }
};