import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card 
        img='no image'
        title='Hola React'
        description='Aprendiendo React'/>
    </div>
  );
}

export default App;
