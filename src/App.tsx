import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import Formats from './components/formats';

function App() {
  return (
    <div className="main">
      <div className="bg-mainBg w-full h-screen flex justify-center items-center">
        <div className="grid border-black border w-11/12 md:grid-cols-1 lg:grid-cols-4 gap-4 p-2 h-64">
          <Sidebar/>
          <Formats/>
        </div>
      </div>
    </div>
  );
}

export default App;
