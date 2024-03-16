import './App.css';
import Bardata from './Bardata';
import Homepage from './Homepage';
import Navbar from './Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Piedata from './Piedata';

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/barchart" element={<Bardata/>}/>
        <Route path="/piechart" element={<Piedata/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
    </>
  );
}

export default App;
