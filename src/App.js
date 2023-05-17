import React from 'react';
import './App.css';
import { MainPage } from './pages/MainPage/MainPage';
import { Statistics } from './pages/Statistics/Statistics';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
