
import './App.css';
import { Link } from 'react-router-dom';

function haara() {
  console.log("Button Clicked");
}

function App() {
  return (
    <div className="App">
      <Link to={"/"}>
        <button onClick={() => haara()} className='nupp'>Leht</button>
      </Link>
    </div>

  );
}


export default App;
