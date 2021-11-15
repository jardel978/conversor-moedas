import React  from 'react';
import './App.css';
import Conversor from './components/Conversor/Conversor';

function App() {

  const listaMoedas = [
    "BRL - Real",
    "USD - Dólar USA",
    "BTC - Bitcoin",
    "CAD - Dólar Canadense",
    "CLP - Peso Chileno",
    "EUR - Euro",
    "HKD - Dólar Hong Kong",
    "JPY - Iene Japonês",
    "UYU - Peso Uruguaio",
    "CNY - Yuan",
  ];

  return (
    <div className="App">
        <h1>Conversor de Moedas</h1>
        <Conversor moedas={listaMoedas} />

    </div>
  );
}

export default App;
