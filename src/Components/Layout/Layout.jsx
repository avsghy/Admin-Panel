import { createHashRouter, Navigate, Outlet } from "react-router";
import Dashboard from "../../Pages/dashboard";
import Users from "../../Pages/users";
import Analysis from "../../Pages/analysis";
import Products from "../../Pages/products";
import SideBar from "../SideBar/SideBar";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import NotFound from "../../Pages/noFound";
function Layout() {
  return (
    <>
      <SideBar />
      <ThemeBtn></ThemeBtn>
      <Outlet />
    </>
  );
}
const router = createHashRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "products", element: <Products /> },
      { path: "users", element: <Users /> },
      { path: "analysis", element: <Analysis /> },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
]);
export default router;
