import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import RegisterPage from "./pages/RegisterPage";
import ActivateEmail from "./pages/ActivateEmail";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function User(props) {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />}></Route>
      <Route path="register" element={<RegisterPage />}></Route>
      <Route path="profile" element={<Profile />}></Route>
      <Route
        path="activate/:activation_token"
        element={<ActivateEmail />}
      ></Route>
      <Route path="forgot" element={<ForgotPassword />}></Route>
      <Route path="reset/:token" element={<ResetPassword />}></Route>
    </Routes>
  );
}

export default User;
