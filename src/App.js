import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/Home";
import { NotFoundPage } from "./screens/Notfoundpage";
import LoginScreen from "./screens/Login";
import SignUpScreen from "./screens/SignUp";
import NewPost from "./components/NewPost";
import Postpage from "./screens/PostPage";
function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/post/create" element={<NewPost />}></Route>
        <Route path="/register" element={<SignUpScreen />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
        <Route path="/postpage" element={<Postpage />}></Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
