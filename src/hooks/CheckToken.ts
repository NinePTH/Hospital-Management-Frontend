import { jwtDecode } from "jwt-decode";

const isTokenExpired = () => {
    const token = localStorage.getItem("myApp_authToken");
    if (!token) return true;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decoded: any = jwtDecode(token);
    console.log("Token Expiry:", decoded.exp, "Current Time:", Date.now() / 1000);

    return decoded.exp < Date.now() / 1000; // Convert to seconds
};

export default isTokenExpired