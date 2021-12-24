import Top from "./components/top/top";
import intro from "./components/intro/intro"

function App() {
  return (
    <div className="app">
      <Top/>
      \<div className="sections">
        <Intro/>
        <Portfolio/>
        <Work/>
      </div>
    </div>
  );
}

export default App;
