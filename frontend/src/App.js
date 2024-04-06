import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import classes from "./styles/app.module.css";

function App() {
  return (
  <div className={classes.container}>
    <Navbar/>
    <Home/>
    <Contact/>
  </div>
  );
}

export default App;
