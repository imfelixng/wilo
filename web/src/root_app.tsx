import React from 'react';
import Header from './components/header';
import UploadArea from './components/upload-area';

import style from './app.module.scss';
import Result from './components/result';

function App() {
  return (
    <div className="App">
      <Header />
      <div className = {style['container']}>
        <UploadArea />
        <Result />
      </div>
    </div>
  );
}

export default App;
