import {FETCH_CURRENT_USER, FETCH_ALL_USERS, ADD_POINTS} from "../constants/actionTypes";

export default (users = [], action) => {
    switch (action.type) {
        case FETCH_ALL_USERS:
            return action.payload;
        case ADD_POINTS:
            return users.map((user) => (user._id === action.payload._id ? action.payload : user));
        default:
            return users;
    }
}