import React from 'react';
import Navbar from './components/Nav/Navbar';
import Header from './components/Header/Header';
import Tags from './components/Tags/Tags';
import MushroomList from './components/Mushrooms/MushroomList';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Tags />
      <MushroomList />
    </>
  );
};

export default App;
