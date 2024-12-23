import { useAdminContext } from "@/hook/userAdminContext";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const { aToken } = useAdminContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (aToken) {
      console.log("Auth Log ",aToken);

      navigate("/admin"); // Redirect authenticated users to a protected route
    }
  }, [aToken, navigate]);

  if (aToken) {
    return null; // Optionally, you can show a loader or placeholder here
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-100 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
