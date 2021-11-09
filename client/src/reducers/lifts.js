import {CREATE_LIFT, DELETE_GOAL, FETCH_ALL_LIFTS} from "../constants/actionTypes";

export default (lifts = [], action) => {
    switch (action.type) {
        case FETCH_ALL_LIFTS:
            return action.payload;
        case CREATE_LIFT:
            return [...lifts, action.payload];
        case DELETE_GOAL:
            return lifts.filter((lift) => lift._id !== action.payload);
        default:
            return lifts;
    }
};