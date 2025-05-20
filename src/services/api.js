import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/user/loginUser', // ⚠️ Update to your real backend URL
  headers: {
    'Content-Type': 'application/json'
  }
});

export const loginUser = (userData) => {
  return api.post('/login', userData); // e.g., POST /api/login
};
