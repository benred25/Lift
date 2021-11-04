import {CREATE_LIFT, FETCH_ALL_LIFTS} from "../constants/actionTypes";

export default (lifts = [], action) => {
    switch (action.type) {
        case FETCH_ALL_LIFTS:
            return action.payload;
        case CREATE_LIFT:
            return [...lifts, action.payload];
        default:
            return lifts;
    }
};