import "./styles.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
