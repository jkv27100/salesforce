import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" />
    </Routes>
  );
}

export default App;
