import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import List from './components/List';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Home/>
      <List/>
    </div>
  );
}

export default App;
