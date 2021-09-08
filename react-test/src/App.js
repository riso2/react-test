import React from 'react';

//Recoil
import { RecoilRoot } from 'recoil';

//Styles
import { Wrapper } from './App.styles';
import { GlobalStyle } from './GlobalStyle';

//Components
import Header from './components/Header';
import Menu from './components/Menu';
import Page from './components/Page';

function App() {
  return (
    <RecoilRoot>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <Menu />
        <Page />
      </Wrapper>
    </RecoilRoot>
  );
};

export default App;
