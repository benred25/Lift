import {CREATE, FETCH_ALL} from "../constants/actionTypes";

export default (lifts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        default:
            return lifts;
    }
};