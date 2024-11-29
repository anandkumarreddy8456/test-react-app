import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Hello from "./pages/Hello";
import Navbar from "./pages/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/nav" element={<Navbar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
