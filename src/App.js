// import logo from './logo.svg';
import "./App.css";

import Navbar from "./components/UI/Navbar/Nav";
import Sidebar from "./components/UI/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="lg:ml-64">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
