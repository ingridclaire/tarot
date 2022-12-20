import React from 'react';
import './App.css';
import Footer from './features/footer/Footer'
import ContentWrapper from './wrappers/contentWrapper/ContentWrapper';
import SpreadSelector from './features/spreadSelector/SpreadSelector';
import Clarity from './features/claritySpread/Clarity';

function App() {
  return (
    <div className="App">
      <div className="app-content">
        <ContentWrapper>
          <SpreadSelector />
          <Clarity />
        </ContentWrapper>
        <Footer />
      </div>
    </div>
  );
}

export default App;
