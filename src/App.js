import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "/components/Header";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<p>Estamos en la home</p>} />
        <Route path="/register" element={<p>formulario de registro</p>}></Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
