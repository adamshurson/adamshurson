import React, { Component } from 'react';
import './App.css';
import Menu from "./components/menu";
import Hero from "./components/hero";
import About from "./components/about";
import Work from "./components/work";
import Running from "./components/running";
import Travel from "./components/travel";

class App extends Component {
  render() {
    return (
      <div className="w-screen overflow-y-auto bg-white">
        <div className="flex flex-col min-h-screen p-4 md:px-8 lg:px-32">
          <Menu/>
          <Hero/>
          <About/>
          <Work/>
          <Running/>
          <Travel/>
        </div>
      </div>
    );
  }
}

export default App;
