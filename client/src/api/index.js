import axios from 'axios';

const goalsUrl = 'http://localhost:5000/goals';

export const fetchGoals = () => axios.get(goalsUrl);