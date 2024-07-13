import React from "react";
import useFetch from "./hooks/useFetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages 
import Home from "./pages/Home";
import Episode from "./pages/Episode";
import { FavProvider } from "./contexts/FavContext";

const App = () => {
  return(
    <FavProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episode/:id" element={<Episode />} />
        </Routes>
      </BrowserRouter>
    </FavProvider>
  );
}

export default App;
