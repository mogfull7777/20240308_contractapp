import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import LoginPage from "./pages/LoginPage";
import AdminMain from "./pages/admin-pages/AdminMain";
import ClientMain from "./pages/client-pages/ClientMain";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminMain />} />
      <Route path="/client" element={<ClientMain />} />
    </Routes>
  );
}

export default App;
