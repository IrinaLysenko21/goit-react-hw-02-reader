import React from 'react';
import Reader from './Reader/Reader';
import publications from '../db/publications.json';

const App = () => {
  return <Reader items={publications} />;
};

export default App;
