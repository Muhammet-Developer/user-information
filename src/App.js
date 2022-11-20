import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './component/details/Detail';
import Main from './component/main/Main';
import Navbar from './component/navbar/Navbar';

function App() {
  const [search, setSearch] = useState("")
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setSearch={setSearch} search={search}/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Detail search={search} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
