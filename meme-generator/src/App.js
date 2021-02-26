import './App.css';
import MemeForm from "./Components/MemeForm/MemeForm";
import MemeDisplay from "./Components/MemeDisplay/MemeDisplay";

function App() {
  return (
    <div className="App">
      {/* Meme Form */}
      <MemeForm />
      {/* Meme Display */}
      <MemeDisplay />
    </div>
  );
}

export default App;
