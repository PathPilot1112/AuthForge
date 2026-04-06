import React from "react";
import { redirect, useNavigate } from "react-router";

const DashBoard = () => {
  const [name, setName] = React.useState("");
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  async function fetchDashboardData() {
    const res = await fetch("https://authforge-ffjm.onrender.com/api/dashboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = res.json();
    if (!token) {
      return <Navigate to="/login" />;
    }
    console.log(localStorage.getItem("token"));
    if (!res.ok) {
      console.error("Failed to fetch dashboard data:", data.error);
      return;
    }
    setName(data.user);
  }
  React.useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-950 via-purple-950 to-black text-white flex flex-col p-5 items-center">
      <h1
        className="text-6xl tracking-wider font-bold font-['Bebas_Neue']"
        style={{ fontFamily: "Bebas Neue" }}
      >
        AuthForge
      </h1>
      <p className="text-4xl font-semibold flex text-center items-center justify-center mt-10">
        Welcome to the dashboard! This is a protected route that only
        authenticated users can access.
      </p>
      <span>{name}</span>
      <button
        className="p-4 bg-red-400 w-1/8 mt-10 rounded-4xl text-lg cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default DashBoard;
