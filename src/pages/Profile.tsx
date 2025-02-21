import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProfile, logoutUser } from "../services/auth";
import { AuthContext } from "../contexts/AuthContext";

const Profile = () => {
  const [profile, setProfile] = useState<string | null>("");
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const data = await fetchProfile();
        setProfile(data.username);
      } catch {
        setProfile(null);
      }
    };
    getProfile();
  }, []);

  const handleLogout = () => {
    logoutUser();
    auth?.setAuthenticated(false);
    navigate("/");
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>{profile}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
