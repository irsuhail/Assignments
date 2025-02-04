// src/App.jsx
import React, { useState, useEffect } from 'react';
import { fetchUsers } from './firebase';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState([]);

 
  useEffect(() => {
    fetchUsers()
      .then((response) => {
        const fetchedUsers = [];
        for (let key in response.data) {
          fetchedUsers.push({ id: key, ...response.data[key] });
        }
        setUsers(fetchedUsers);
      })
      .catch((error) => console.log("Error fetching users:", error));
  }, []);

  return (
    <div className="App">
      <h1>User Management System</h1>
      <UserForm setUsers={setUsers} />
      <UserList users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
