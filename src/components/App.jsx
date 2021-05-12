import React from 'react';
import { Loader, LoaderContextProvider } from '@ui';
import Routes from '@components/Routes';
// import { ReactComponent as SvgSprite } from '@src/assets/sprite-mono.svg';

const App = () => {
  return (
    <>
      {/* <div style={{ position: 'absolute', top: 0, left: 0, visibility: 'hidden', width: 0, height: 0 }}>
        <SvgSprite />
      </div> */}

      <LoaderContextProvider>
        <Routes />
        <Loader />
      </LoaderContextProvider>
    </>
  );
};

export default App;
