import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//HashRouter    BrowserRouter    diff
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  //router-dom 6.XX sttyle
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
