import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import AuthLayout from "./components/layouts/auth";
import DashboardLayout from "./components/layouts/dashboard";
import SignFormView from "./pages/auth/views";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { loginAtom } from "./store";
import AdminPanelView from "./pages/admin/views";
import AuthhorizeGuard from "./components/guard/authorized-guard";
import UnAuthhorizeGuard from "./components/guard/unauthorized-guard";

const App = () => {
  const setUser = useSetAtom(loginAtom);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
      setisLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Routes>
      <Route
        path="auth"
        element={
          <AuthhorizeGuard>
            <AuthLayout />
          </AuthhorizeGuard>
        }
      >
        <Route path="sign-in" element={<SignFormView />} />
      </Route>
      <Route
        path="dashboard"
        element={
          <UnAuthhorizeGuard>
            <DashboardLayout />
          </UnAuthhorizeGuard>
        }
      >
        <Route path="admin" element={<AdminPanelView />} />
      </Route>
      <Route path="/" element={<Navigate to="/auth/sign-in" />}></Route>
    </Routes>
  );
};

export default App;
