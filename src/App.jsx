import "./app.scss";
import Top from "./components/top/top";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";
import Menu from "./components/menu/menu";
import { useState } from "react";




function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Top menuOpen={menuOpen}setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen}setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Work/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
