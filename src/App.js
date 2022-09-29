import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className="App md:max-h-screen md:overflow-hidden">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
