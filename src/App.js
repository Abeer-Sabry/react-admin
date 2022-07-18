import "./App.css";
// --- Components
import MainBar from "./components/MainBar/MainBar";
import SideBar from "./components/SideBar/SideBar";
function App() {
  return (
    <div className="App">
      <div style={{ position: "relative" }}>
        <SideBar />
      </div>
      <div>
        <MainBar />
      </div>
    </div>
  );
}

export default App;
