
import axios from 'axios';


const databaseURL = "https://web205-firebase-db.firebaseio.com/users.json";


export const fetchUsers = () => {
  return axios.get(databaseURL);
};


export const addUser = (user) => {
  return axios.post("https://your-firebase-db.firebaseio.com/users.json", user);
};


export const editUser = (userId, updatedUser) => {
  return axios.patch(`https://your-firebase-db.firebaseio.com/users/${userId}.json`, updatedUser);
};


export const deleteUser = (userId) => {
  return axios.delete(`https://your-firebase-db.firebaseio.com/users/${userId}.json`);
};
