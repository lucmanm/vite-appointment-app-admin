import { Route, Routes } from "react-router-dom";
import AuthLoginPage from "./pages/AuthLoginPage";
import HomePage from "./pages/HomePage";
import AdminLayout from "./pages/layouts/AdminLayout";
import AuthLayout from "./pages/layouts/AuthLayout";
import RootLayout from "./pages/layouts/RootLayout";
import DoctorFormPage from "./pages/DoctorFormPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import DoctorsPage from "./pages/DoctorsPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<HomePage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="add-doctor" element={<DoctorFormPage />} />
          <Route path="doctor-lists" element={<DoctorsPage />} />
          <Route path="profile" element={<ProfilePage />} />
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
