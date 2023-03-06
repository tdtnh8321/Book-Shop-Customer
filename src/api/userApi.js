import axiosClient from "./axiosClient";
class UserApi {
  login = async (data) => {
    console.log(data);
    const url = "/user/login_customer";
    return axiosClient.post(url, data, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  logout = async () => {
    const url = "user/logout";
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  getProfile = async (token) => {
    const url = "/user/profile";
    return axiosClient.get(url, {
      headers: { Authorization: token },
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  updateProfile = async (data) => {
    const url = "/user/update";
    return axiosClient.put(url, data, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  register = async (data) => {
    const url = "/user/register_customer";
    return axiosClient.post(url, data, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  activateEmail = async (data) => {
    const url = "/user/activate";
    return axiosClient.post(url, data, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  forgotPassword = async (data) => {
    const url = "/user/forgot";
    return axiosClient.post(url, data, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  resetPassword = async (data) => {
    console.log(data.password, data.token);
    const password = data.password;
    const token = data.token;
    const url = "/user/reset";
    return axiosClient.post(
      url,
      { password },
      {
        headers: { Authorization: token },
        paramsSerializer: {
          indexes: false,
        },
      }
    );
  };
}
const userApi = new UserApi();
export default userApi;
