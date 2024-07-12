import React from "react";
import useFetch from "./hooks/useFetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages 
import Home from "./pages/Home";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/episode/:id" element={<div>episode</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
