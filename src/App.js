import './App.css';
import Survey from './components/Survey'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        how are you feeling
        <span>
          today
        </span>?
      </header>
      <Survey />
    </div>
  );
}

export default App;