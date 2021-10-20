import './App.css';
import Buttom from './components/Button'

function soma(a, b){
  alert (a + b)
}

function App() {
  return (
    <div className="App">
      <h1>
        Hello World
      </h1>
      <Buttom onClick={() => soma(10,20)} name= "LucasLM"/>
    </div>
  );
}

export default App;
