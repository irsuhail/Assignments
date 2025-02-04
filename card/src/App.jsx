import React from 'react';
import Card from './Components'; // Import the Card component

function App() {
  return (
    <div style={styles.container}>
      <Card title="Card 1 Title">
        <p>This is the content of the first card.</p>
      </Card>
      
      <Card title="Card 2 Title">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Card>
      
      <Card title="Card 3 Title">
        <div>
          <h3>Some Header</h3>
          <p>This card has more complex content.</p>
        </div>
      </Card>
    </div>
  );
}

// Styles for the parent container
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
  },
};

export default App;
