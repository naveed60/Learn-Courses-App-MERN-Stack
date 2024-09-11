import React from 'react';
import { BrowserRouter as Routetr,Route,Routes, Router } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (<Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </Router>
  );
}

export default App;
