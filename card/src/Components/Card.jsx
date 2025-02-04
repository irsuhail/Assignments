import React from 'react';

function Card({ title, children }) {
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

// Styles for the card
const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    display: 'inline-block',
    verticalAlign: 'top',
  },
};

export default Card;
