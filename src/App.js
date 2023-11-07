import "./App.css";
import Home from "./components/Home";
import Mainpage from "./components/Mainpage";
import DecryptedImage from "./components/DecryptedImage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mainpage" element={<Mainpage />} />
      <Route path="/decrypted_image" element={<DecryptedImage />} />
    </Routes>
  );
};
export default App;
