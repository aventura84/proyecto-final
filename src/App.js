import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/Home";
import { NotFoundPage } from "./screens/Notfoundpage";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/register" element={<p>formulario de registro</p>}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
