
import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
