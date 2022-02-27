import { Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./Pages/Landing.Page/Landing.Page";
import AuthSuccess from "./Components/AuthSuccess.Component";
import HelloWorld from "./Pages/HelloWorld.Page/HelloWorld.Page";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/helloWorld" element={<HelloWorld />} />
        <Route path="/authSuccess" element={<AuthSuccess />} />
      </Routes>
    </div>
  );
};

export default App;
