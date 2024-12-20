import { Route, Routes } from "react-router-dom";
import AuthLoginPage from "./pages/AuthLoginPage";
import HomePage from "./pages/HomePage";
import AdminLayout from "./pages/layouts/AdminLayout";
import AuthLayout from "./pages/layouts/AuthLayout";
import RootLayout from "./pages/layouts/RootLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Route>
      {/* auth Layout */}
      <Route path="login" element={<AuthLayout />}>
        <Route index element={<AuthLoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
