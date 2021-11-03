import { combineReducers } from "redux";

import goals from './goals';
import lifts from './lifts';

export const reducers = combineReducers({ goals, lifts });