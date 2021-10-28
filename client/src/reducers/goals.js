import { CREATE, UPDATE, DELETE, FETCH_ALL } from "../constants/actionTypes";

export default (goals = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...goals, action.payload];
        default:
            return goals;
    }
};