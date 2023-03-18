import Login from "_pages/Login";
import TaskList from "_pages/TaskList.tsx";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" replace />} />
    <Route path="/login" element={<Login />} />

    {/* Below will need an auth gate once auth is implemented */}
    <Route path="/tasks" element={<TaskList />} />
  </Routes>
);

export default AppRoutes;
