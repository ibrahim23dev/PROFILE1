// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
  Certificate,
} from "./components";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Certificate />
            <Feedbacks />
          </div>
          <div className="relative z-0">
            
            <Contact />
            <StarsCanvas/>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
