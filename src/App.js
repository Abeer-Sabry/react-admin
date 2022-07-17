import "./App.css";
import EnhancedTable from "./components/Material";
// --- Components
import Search from "./components/Search/Search";
import SideBar from "./components/SideBar/SideBar";
import UserTable from "./components/UserTable/UserTable";
import { colors } from "./constants/constants";
function App() {
  return (
    <div className="App">
      <div>
        <SideBar />
      </div>
      <div>
        <Search />
        {/* <UserTable /> */}
        <EnhancedTable />
      </div>
    </div>
  );
}

export default App;
