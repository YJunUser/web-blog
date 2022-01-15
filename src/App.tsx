import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AboutCom } from './pages/About';
import { Article } from './pages/Article';
import { Articles } from './pages/Articles';
import { Home } from './pages/Home';
import { NoMatch } from './pages/NoMatch';

function App() {
  useEffect(() => {
    document.title = '姚伯骏的个人网站';
  }, []);
  return (
    <Container>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/articles" element={<Articles></Articles>}></Route>
          <Route
            path="/articles/:article"
            element={<Article></Article>}
          ></Route>
          <Route path="/about" element={<AboutCom></AboutCom>}></Route>
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
  position: relative;
`;

export default App;
