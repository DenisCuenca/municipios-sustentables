import React from "react";
import { useUserContext } from "../../context/userContext";
import ReportsForm from "../reports/ReportsForm";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();

  return (
    <div>
      <h2>this is the dashboard</h2>
      <p>Name: {user.displayName}</p>
      <p>Email: {user.email}</p>
      <button onClick={logoutUser}>Logout</button>

      <ReportsForm />
    </div>
  );
};

export default Dashboard;
