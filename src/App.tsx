import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import SingIn from "./pages/SingIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
