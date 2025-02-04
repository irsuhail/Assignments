
import React from 'react';
import { deleteUser, editUser } from '../firebase';

function UserList({ users, setUsers }) {

  const handleDelete = (userId) => {
    deleteUser(userId)
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      })
      .catch((error) => console.log("Error deleting user:", error));
  };

  
  const handleEdit = (userId, name, email) => {
    const updatedUser = { name, email };
    editUser(userId, updatedUser)
      .then(() => {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === userId ? { ...user, ...updatedUser } : user
          )
        );
      })
      .catch((error) => console.log("Error editing user:", error));
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.name} ({user.email})</span>
            <button onClick={() => handleEdit(user.id, user.name, user.email)}>
              Edit
            </button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
