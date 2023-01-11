import CardForm from "./components/CardForm";
import Table from "./components/Table";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Credit Card System
        </h1>
      </header>
      <CardForm props />
      <Table props/>
    </div>
  );
}

export default App;
