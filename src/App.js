
import React from "react";
import Header from "./components/Header/Header";
import Home from "./sections/Home";
import Guide from "./sections/Guide/Guide";
import Preferences from "./sections/Preferences/Preferences";
import Examples from "./sections/Examples";
import About from "./sections/About";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Guide />
        <Preferences />
        <Examples />
        <About />
      </main>
    </>
  );
}

export default App;
