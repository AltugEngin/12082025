import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleSignOut}> Sign Out</button>
    </div>
  );
}

export default Dashboard;
