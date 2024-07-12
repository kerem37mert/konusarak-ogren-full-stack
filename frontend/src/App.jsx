import React from "react";
import useFetch from "./hooks/useFetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages 
import Home from "./pages/Home";
import Episode from "./pages/Episode";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episode/:id" element={<Episode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
