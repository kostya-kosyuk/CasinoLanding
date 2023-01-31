import React from 'react';
import './App.css';

import { Card } from './Components/Card';

import cardsJSON from './cards.json'
import { CardInfo } from './types/CardInfo';

const cards = JSON.parse(JSON.stringify(cardsJSON)) as CardInfo[];

function App() {
  const queryParameters = new URLSearchParams(window.location.search)
  const id = queryParameters.get('s1');
  return (
    <div className="container">
      <Card cards={cards} id={id ? id : ''} />
    </div>
  );
}

export default App;
