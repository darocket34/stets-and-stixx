import './App.css';
import Nav from './Components/Navigation/Nav';
import About from './Components/About/About';
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Nav>
        <Routes>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
        </Routes>
      </Nav>
    </>
  );
}

export default App;
