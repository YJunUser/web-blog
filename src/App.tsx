import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { MerryChristmas } from './pages/MerryChristmas';
import { NoMatch } from './pages/NoMatch';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route element={<MerryChristmas></MerryChristmas>} path="/"></Route>
        <Route path="*" element={<NoMatch></NoMatch>}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
