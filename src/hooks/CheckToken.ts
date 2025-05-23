import { jwtDecode } from "jwt-decode";
import { logoutUser } from "../services/auth";

const isTokenExpired = () => {
    const token = localStorage.getItem("myApp_authToken");
    if (!token) return true;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decoded: any = jwtDecode(token);
    console.log("Token Expiry:", decoded.exp, "Current Time:", Date.now() / 1000);

    return decoded.exp < Date.now() / 1000; // Convert to seconds
};

const logoutIfExpired = () => {
    if (isTokenExpired()) {
        logoutUser()
        throw new Error("Token expired");
    };
};

export default logoutIfExpired