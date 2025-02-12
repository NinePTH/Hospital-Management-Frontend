import React from "react"
import { BrowserRouter as Router, Routes, Route,Navigate  } from "react-router-dom";
// import Head from "./components/Head"
// import FetchUsers from "./components/FetchPosts"
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";

const isAuthenticated = !!localStorage.getItem("token"); // ✅ Check if user is logged in

const App: React.FC = () => {

  return (
        <Router>
            <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/" />} />
            </Routes>
        </Router>
  )
}

export default App
