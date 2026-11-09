import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-5xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;