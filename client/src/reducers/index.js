import { combineReducers } from "redux";

import goals from './goals';
import lifts from './lifts';
import users from './users';

export const reducers = combineReducers({ goals, lifts, users });