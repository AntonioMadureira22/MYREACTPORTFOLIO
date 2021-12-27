import "./app.scss";
import Top from "./components/top/top";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";



function App() {
  return (
    <div className="app">
      <Top/>
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
