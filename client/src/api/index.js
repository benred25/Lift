import axios from 'axios';

const goalsUrl = 'http://localhost:5000/goals';
const liftsUrl = 'http://localhost:5000/lifts';
const usersUrl = 'http://localhost:5000/users';

export const fetchGoals = () => axios.get(goalsUrl);
export const createGoal = (newGoal) => axios.post(goalsUrl, newGoal);
export const completeGoal = (id) => axios.patch(`${goalsUrl}/${id}/completeGoal`);
export const deleteGoal = (id) => axios.delete(`${goalsUrl}/${id}`);
export const updateGoal = (id, updatedGoal) => axios.patch(`${goalsUrl}/${id}`, updatedGoal);

export const fetchLifts = () => axios.get(liftsUrl);
export const createLift = (newLift) => axios.post(liftsUrl, newLift);
export const deleteLift = (id) => axios.delete(`${liftsUrl}/${id}`);

export const fetchUsers = () => axios.get(usersUrl);
export const addPoints = (id, points) => axios.patch(`${usersUrl}/${id}/addPoints`, { points: points});