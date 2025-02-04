
import React, { useState } from 'react';
import { addUser } from '../firebase';

function UserForm({ setUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    if (!name || !email) {
      setError("Both fields are required.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    
    setError("");

    const newUser = { name, email };
    addUser(newUser)
      .then((response) => {
        setUsers((prevUsers) => [
          ...prevUsers,
          { id: response.data.name, name, email }
        ]);
        setName(""); 
        setEmail(""); 
      })
      .catch((error) => console.log("Error adding user:", error));
  };

  return (
    <div>
      <h2>Add User</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default UserForm;
