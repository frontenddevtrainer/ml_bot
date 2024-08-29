import { Outlet } from "react-router-dom";
import Header from "../header/header.component";

const MainLayout = () => {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <Header />
      <Outlet />
    </main>
  );
};

export default MainLayout;
