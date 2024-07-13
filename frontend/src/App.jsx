import React from "react";
import useFetch from "./hooks/useFetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages 
import Home from "./pages/Home";
import Episode from "./pages/Episode";
import { FavProvider } from "./contexts/FavContext";

//Components
import Navbar from "./components/Navbar";

const App = () => {
  return(
    <FavProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episode/:id" element={<Episode />} />
        </Routes>
      </BrowserRouter>
    </FavProvider>
  );
}

export default App;
