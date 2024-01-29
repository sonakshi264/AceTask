// import logo from './logo.svg';
// import './App.css';
import About from "./components/About";
import Lastsection from "./components/Lastsection";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

function App() {
  return (
    <>
      <header><Navbar/></header>
      <Section1></Section1>
      <Section2></Section2>
      <About></About>
      <Lastsection></Lastsection>
    </>
  );
}

export default App;
