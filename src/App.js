import "./app.css";
import AlramSplash from "./pages/Alarm";
import AlarmDashboard from "./pages/AlramDashboard";
import Calculate from "./pages/Calculater";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Setalarm from "./pages/setalarm";
import Setbedtime from "./pages/setbedtime";
import Learning from "./pages/Learning";
import SigninSignup from "./pages/SigninSignup";
import IphoneCalculator from "./pages/IphoneCalculator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/learing" element={<Learning />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/splash" element={<AlramSplash />} />
        <Route path="/alram-dashboard" element={<AlarmDashboard />} />
        <Route path="/setalarm" element={<Setalarm />} />
        <Route path="/setbedtime" element={<Setbedtime />} />
        <Route path="/signin" element={<SigninSignup />} />
        <Route path="/signup" element={<SigninSignup />} />
        <Route path="/iphone-calculator" element={<IphoneCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
