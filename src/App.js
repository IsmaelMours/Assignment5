
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.js";
import  Dashboard  from "./Pages/Dashboard.js";
import Questionnair from "./Pages/Questionnair.js"
import Add from "./Pages/Add.js";


function App() {
  return (
   <>
      <Routes>
  
  <Route path="/" element ={ <Home/>} />
  <Route path="/dashboard" element ={ <Dashboard/>} />
  <Route path="/quiz" element ={ <Questionnair/>} />
  <Route path="/add" element ={ <Add/>} />
 
</Routes>
   </>
  );
}

export default App;
