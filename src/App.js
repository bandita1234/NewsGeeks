import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Sports from "./pages/Sports";
import NewsPage from "./pages/NewsPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/*<Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />*/}
          <Route path="/" element={<Home />} />
          <Route path="/news/:category" element={<NewsPage />} />
          <Route path="/search" element={<SearchPage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
