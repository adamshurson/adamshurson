import React, { Component } from 'react';
import './App.css';
import Menu from "./components/menu";
import Hero from "./components/hero";
import About from "./components/about";
import Work from "./components/work";
import Running from "./components/running";
import Travel from "./components/travel";
import Contact from "./components/contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.nodes = {};
  }
  render() {
    return (
      <div className="w-screen overflow-y-auto bg-white">
        <div className="flex flex-col min-h-screen p-4 md:px-8 lg:px-32">
          <Menu nodes={this.nodes}/>
          <Hero/>
          <About about={node => this.nodes.about = node}/>
          <Work work={node => this.nodes.work = node}/>
          <Running running={node => this.nodes.running = node}/>
          <Travel travel={node => this.nodes.travel = node}/>
          <Contact contact={node => this.nodes.contact = node}/>
        </div>
      </div>
    );
  }
}

export default App;
