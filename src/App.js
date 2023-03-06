import { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";

import Loading from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Home from "./features/Home";
import Book from "./features/Book";
import Cart from "./features/Cart";
import User from "./features/User";
import Order from "./features/Order";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "./features/User/tokenSlice";
import { login, getUser } from "./features/User/userSlice";
import tokenQuery, { fetchGetToken } from "./queries/TokenQuery";
import userQuery, { fetchGetProfile } from "./queries/UserQuery";
import axios from "axios";
import HomePage from "./components/HomePage";
import { Toaster } from "react-hot-toast";
function App() {
  const dispatch = useDispatch();
  const token = useSelector((slice) => slice.token);
  const user = useSelector((slice) => slice.user);
  console.log({ isLogged: user.isLogged, token });
  //nếu đã đăng nhập thành công(tồn tại localstorage :firstlogin)
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    console.log({ firstLogin, isLogged: user.isLogged });
    if (user.isLogged === true) {
      console.log("/");
      const actionQuery = async () => {
        const res = await axios.get(
          "http://localhost:3000/user/refresh_token",
          null
        );
        console.log(res);
        dispatch(getToken(res.data.access_token));
      };
      actionQuery();
    }
  }, [user.isLogged]);
  //đã có accessToken => lấy thông tin account
  useEffect(() => {
    console.log({ token });
    if (token != "") {
      const getProfile = async () => {
        dispatch(login());
        const res = await fetchGetProfile(token);
        console.log(res);
        dispatch(getUser(res));
      };
      getProfile();
    }
  }, [token]);

  return (
    <div className="content-wrapper max-w-screen-2xl text-base mx-auto font-mono">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Header />
          <div className=" bg-blue-50">
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/book/*" element={<Book />} />
              <Route path="/home/*" element={<Home />} />
              <Route path="/cart/*" element={<Cart />} />
              <Route path="/user/*" element={<User />} />
              <Route path="/order/*" element={<Order />} />
              <Route element={<NotFound />} />
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
        <Toaster></Toaster>
      </Suspense>
    </div>
  );
}

export default App;
