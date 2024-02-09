import "./App.css";
import NavbarComponent from "./component/NavbarComponent";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FooterComponent from "./component/FooterComponent";
import CardlistComponent from "./component/CardlistComponent";
import WelcomeComponent from "./component/WelcomeComponent.jsx";
import CityComponent from "./component/CityComponent.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavbarComponent />
        </header>
        <main className="mt-4">
          <Routes>
            <Route path="/" element={<WelcomeComponent />} />
            <Route path="/:city" element={<CardlistComponent />} />
            <Route path="/citycomponent" element={<CityComponent />} />
          </Routes>
        </main>
        <footer className="bg-body-tertiary mt-2">
          <FooterComponent />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
