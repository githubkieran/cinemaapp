import './App.css';
import Nav from './components/navigation/Nav';
import About from './components/About';
import Movies from './components/Movies';
import Menu from './components/Menu';
import Location from './components/Location';
import Foot from './components/footer/Foot';

function App() {
  return (
    <>
      <Nav/>
      <About />
      <Movies />
      <Menu />
      <Location />
      <Foot />
    </>
  );
}

export default App;
