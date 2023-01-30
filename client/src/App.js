import './App.css';
import Dashboard from './components/Dashboard';
import CreatePet from './components/CreatePet';
import Edit from './components/Edit';
import Details from './components/Details';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/pets/new" element={<CreatePet/>}/>
          <Route path="/pets/:id/edit" element={<Edit/>}/>
          <Route path="/pets/:id" element={<Details/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
