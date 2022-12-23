import React from 'react';

import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Countries from './Countries';
import Country from './Country'
import './App.css';

function App() {
  
  return (
    <div className='App'>
      <Router>
      <Routes>
        <Route path='/' element={<Countries/>} />
        <Route path='/country/:name' element={<Country/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
