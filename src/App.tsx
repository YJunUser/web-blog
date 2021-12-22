import styled from '@emotion/styled';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { MerryChristmas } from './pages/MerryChristmas';
import { NoMatch } from './pages/NoMatch';

function App() {
  return (
    <Container>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/merry"
            element={<MerryChristmas></MerryChristmas>}
          ></Route>
          <Route path="*" element={<NoMatch></NoMatch>}></Route>
        </Route>
      </Routes>
    </Container>
  );
}

const Container = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  background: #fff;
  font-family: Heebo;
  font-style: normal;
  height: 100vh;
`;

export default App;
