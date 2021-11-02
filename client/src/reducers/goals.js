import { CREATE, UPDATE, DELETE, FETCH_ALL, COMPLETE } from "../constants/actionTypes";

export default (goals = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...goals, action.payload];
        case COMPLETE:
            return goals.map((goal) => (goal._id === action.payload._id ? action.payload : goal));
        case DELETE:
            return goals.filter((goal) => goal._id !== action.payload);
        default:
            return goals;
    }
};