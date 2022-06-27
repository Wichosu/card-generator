import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import FormCard from './components/FormCard';

function App() {
  return (
    <div className='App'>
      <Card 
        img={'pic'}
        title={'Hola React'}
        description={'Aprendiendo React'}/>
      
      <FormCard />
    </div>
  );
}

export default App;
