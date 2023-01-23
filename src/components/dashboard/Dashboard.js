import React from "react";
import { useUserContext } from "../../context/userContext";
import ReportsForm from "../reports/ReportsForm";
import { redirect, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  // const navigate = useNavigate()
  // logout te debe llevar a el signin
  // const n = useNavigate();

  

  return (
    <div>
      <h2>this is the dashboard</h2>
      <p>Name: {user.displayName}</p>
      <p>Email: {user.email}</p>
      <a href = "/signin" onClick={logoutUser}>logout</a>

      <ReportsForm />
    </div>
  );
};

export default Dashboard;
