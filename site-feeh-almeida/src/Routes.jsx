import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import useAuth from "./hooks/useAuth";
import Header from "./components/header/Header";
import HeaderAdm from "./components/HeaderAdm/Header";

import Home from "./components/home/Home";
import Gallery from "./components/galery/Gallery";
import { tablePrices } from "./services/prices";
import Prices from "./components/prices/Prices";
import Scheduling from "./components/scheduling/Scheduling";
import LoginAdm from "./pages/Login/LoginAdm";

export function Router() {
  const { handleGetToken } = useAuth();

  const ProtectedRoutes = ({ redirectTo }) => {
    let authToken = handleGetToken();

    return authToken ? <Outlet /> : <Navigate to={redirectTo} />;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
            <Gallery />
            <Prices />
            <Scheduling />
          </>
        }
      />
      <Route
        path="/login"
        element={
          <>
            <HeaderAdm />
            <LoginAdm />
          </>
        }
      />
      <Route element={<ProtectedRoutes redirectTo={"/"} />}>
        <Route
          path="/admin"
          element={
            <>
              <HeaderAdm />
              <Admin />
            </>
          }
        />
      </Route>
    </Routes>
  );
}
