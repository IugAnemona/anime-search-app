import "./App.css";
import Navbar from "./components/Home/Navbar/Navbar";
import logo from "./assets/icon.png";
import Main from "./components/Home/Maincontent/Main";
function App() {
  return (
    <div className="bg-color-white h-screen">
      <Navbar logo={logo}></Navbar>
      <Main></Main>
    </div>
  );
}

export default App;
