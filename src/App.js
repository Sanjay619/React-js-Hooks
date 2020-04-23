import React from 'react';
import logo from './logo.svg';
import './App.css';
import classCounter from './component/ClassCounter'
import HookCounter from './component/HookCounter';

function App() {
  return (
    <div className="App">
       <h1>Hooks Sample</h1>
       <HookCounter />
       {/* <ClassCounter /> */}
    </div>
  );
}

export default App;
