import axios from 'axios';

const goalsUrl = 'http://localhost:5000/goals';

export const fetchGoals = () => axios.get(goalsUrl);
export const createGoal = (newGoal) => axios.post(goalsUrl, newGoal);