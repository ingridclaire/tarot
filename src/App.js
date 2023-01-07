import React from 'react';
import './App.css';
import Footer from './features/footer/Footer'
import ContentWrapper from './wrappers/contentWrapper/ContentWrapper';
import SpreadSelector from './features/spreadSelector/SpreadSelector';
import Clarity from './features/claritySpread/Clarity';
import { useSelector } from 'react-redux';

function App() {
  const spread = useSelector(state => state.spreadSelector)
  const { current } = spread;
  return (
    <div className="App">
      <div className="app-content">
        <ContentWrapper>
          {!current && <SpreadSelector />}
          {current === 'Clarity' && <Clarity />}
        </ContentWrapper>
      </div>
        <Footer />
    </div>
  );
}

export default App;
