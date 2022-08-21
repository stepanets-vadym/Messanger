// React
import React, { useContext, useEffect, useState } from 'react';
import { Context } from 'index';
import { useAuthState } from 'react-firebase-hooks/auth';


// Components & elements
import { Sprite } from 'Components/sprite/Sprite';
import AppRoter from 'Components/Routes/AppRoter';

// Pages

// Style
import './styles/index.scss';
import Loader from 'Elements/Loader/Loader';


function App() {
 
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader/>
  }

  return (
    <div className='App'>
      {/* SVG */}
      <Sprite />
      <AppRoter/>
    </div>
  );
}

export default App;
