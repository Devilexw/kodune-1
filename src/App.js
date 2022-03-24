
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to={"/"}>
        <button className='nupp'>Leht</button>
      </Link>
    </div>
  );
}

export default App;
