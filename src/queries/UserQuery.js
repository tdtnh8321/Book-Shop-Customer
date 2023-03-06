import userApi from "../api/userApi";

import { useMutation, useQuery } from "react-query";

const fetchApiLogin = async (data) => {
  try {
    console.log(data);
    const res = await userApi.login(data);
    return res;
  } catch (error) {
    return error.res.response;
  }
};
const fetchApiLogout = async () => {
  try {
    const res = await userApi.logout();
    return res;
  } catch (error) {
    console.log("Failed to fetch ", error);
  }
};
const fetchGetProfile = async (token) => {
  try {
    const res = await userApi.getProfile(token);
    return res;
  } catch (error) {
    console.log("Failed to fetch ", error);
  }
};
const fetchApiUpdateProfile = async (data) => {
  try {
    const res = await userApi.updateProfile(data);
    return res;
  } catch (error) {
    console.log("fetchApiUpdateProfile ", error);
  }
};
const fetchApiRegister = async (data) => {
  try {
    const res = await userApi.register(data);
    return res;
  } catch (error) {
    console.log("fetchApiRegister ", error);
  }
};
const fetchApiActivateEmail = async (data) => {
  try {
    const res = await userApi.activateEmail(data);
    return res;
  } catch (error) {
    console.log("fetchApiActivateEmail ", error);
  }
};
const fetchApiForgotPassword = async (data) => {
  try {
    const res = await userApi.forgotPassword(data);
    return res;
  } catch (error) {
    console.log("fetchApiForgotPassword ", error);
  }
};
const fetchApiResetPassword = async (data) => {
  try {
    const res = await userApi.resetPassword(data);
    return res;
  } catch (error) {
    console.log("fetchApiResetPassword ", error);
  }
};
class UserQuery {
  login = (isMutation) => {
    return useMutation(["login"], fetchApiLogin, {
      enable: !!isMutation,
    });
  };
  getProfile = (token) => {
    return useQuery(["fetchProfile", token], () => fetchGetProfile(token));
  };
  updateProfile = (isMutation) => {
    return useMutation(["updateProfile"], fetchApiUpdateProfile, {
      enable: !!isMutation,
    });
  };
  register = (isMutation) => {
    return useMutation(["register"], fetchApiRegister, {
      enable: !!isMutation,
    });
  };
  activateEmail = (isMutation) => {
    return useMutation(["activateEmail"], fetchApiActivateEmail, {
      enable: !!isMutation,
    });
  };
  forgotPassword = (isMutation) => {
    return useMutation(["forgotPassword"], fetchApiForgotPassword, {
      enable: !!isMutation,
    });
  };
  resetPassword = (isMutation) => {
    return useMutation(["resetPassword"], fetchApiResetPassword, {
      enable: !!isMutation,
    });
  };
}
const userQuery = new UserQuery();
export { fetchApiLogin, fetchGetProfile, fetchApiLogout };
export default userQuery;
