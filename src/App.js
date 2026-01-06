import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./sections/Home";
import Guide from "./sections/Guide/Guide";
import Preferences from "./sections/Preferences/Preferences";
import Examples from "./sections/Examples";
import Checklist from "./sections/Checklist";
import About from "./sections/About";
import Footer from "./components/Footer/Footer";
import CounterExample from "./sections/CounterExample/CounterExample";
import "./App.css";

function App() {
  const [isCounterExampleOpen, setIsCounterExampleOpen] = useState(false);

  useEffect(() => {
    const hasSeenCounter = localStorage.getItem("hasSeenCounterExample");
    if (!hasSeenCounter) {
      setIsCounterExampleOpen(true);
    }
  }, []);

  const openCounterExample = () => {
    setIsCounterExampleOpen(true);
  };

  const closeCounterExample = () => {
    setIsCounterExampleOpen(false);
    localStorage.setItem("hasSeenCounterExample", "true");
  };

  return (
    <>
      <Header onOpenCounterExample={openCounterExample} />
      <main>
        <Home />
        <Guide />
        <Preferences />
        <Examples />
        <Checklist />
        <About />
      </main>
      <Footer />
      <CounterExample 
        isOpen={isCounterExampleOpen} 
        onClose={closeCounterExample} 
      />
    </>
  );
}

export default App;
