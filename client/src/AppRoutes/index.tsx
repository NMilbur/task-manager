import Login from "_pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" replace />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default AppRoutes;
