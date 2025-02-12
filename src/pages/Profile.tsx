import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProfile, logoutUser } from "../services/auth";

const Profile = () => {
  const [profile, setProfile] = useState("");
  const navigate = useNavigate(); // ✅ Add this

  useEffect(() => {
    const getProfile = async () => {
      try {
        const data = await fetchProfile();
        setProfile(data.username);
      } catch {
        setProfile("Unauthorized");
      }
    };
    getProfile();
  }, []);

  const handleLogout = () => {
    logoutUser();
    navigate("/"); // ✅ Redirect to login after logout
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
