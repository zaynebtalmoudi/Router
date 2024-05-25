
import './App.css';
import Home from './Home';
import About from './About';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <>

      <nav>
        <ul>
          <li> <Link to='/'> Home </Link></li>
          <li> <Link to='/about'> About </Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </>

  );
}

export default App;
