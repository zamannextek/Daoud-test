import "./app.css";
import AlramSplash from "./pages/Alarm";
import AlarmDashboard from "./pages/AlramDashboard";
import Calculate from "./pages/Calculater";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Setalarm from "./pages/setalarm";
import Setbedtime from "./pages/setbedtime";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculate />} />
        <Route path="/splash" element={<AlramSplash />} />
        <Route path="/alram-dashboard" element={<AlarmDashboard />} />
        <Route path= "/setalarm" element= {<Setalarm />} />
        <Route path= "/setbedtime" element= {<Setbedtime />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
