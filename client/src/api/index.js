import axios from 'axios';

const goalsUrl = 'http://localhost:5000/goals';

export const fetchGoals = () => axios.get(goalsUrl);
export const createGoal = (newGoal) => axios.post(goalsUrl, newGoal);
export const completeGoal = (id) => axios.patch(`${goalsUrl}/${id}/completeGoal`);
export const deleteGoal = (id) => axios.delete(`${goalsUrl}/${id}`);
export const updateGoal = (id, updatedGoal) => axios.patch(`${goalsUrl}/${id}`, updatedGoal);