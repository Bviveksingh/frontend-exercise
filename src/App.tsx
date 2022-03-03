import React from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Formats from './components/formats';

function App() {
  return (
    <div className="main">
      <div className="bg-mainBg w-full h-screen flex justify-center items-center">
        <div className="grid w-11/12 md:grid-cols-1 lg:grid-cols-4 gap-4 p-2 h-auto">
          <Sidebar/>
          <Formats/>
        </div>
      </div>
    </div>
  );
}

export default App;
