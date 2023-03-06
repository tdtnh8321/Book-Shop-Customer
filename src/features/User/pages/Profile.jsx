import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userQuery from "../../../queries/UserQuery";
import { getUser } from "../userSlice";
import { toast } from "react-hot-toast";
function Profile(props) {
  const userSlice = useSelector((slice) => slice.user);
  const [user, setUser] = useState(userSlice.user);

  const [isMutation, setIsMutation] = useState(false);
  const { mutateAsync: updateProfile } = userQuery.updateProfile(isMutation);
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    setIsMutation((prev) => true);
    const res = await updateProfile(user);
    console.log(res);
    toast.success(res.msg);
    const { password, ...newUser } = user;
    console.log(newUser);
    dispatch(getUser(newUser));
    setIsMutation((prev) => false);
  };
  return (
    <div className="w-full px-10 flex flex-row justify-center items-center text-orange-700 ">
      <div className="flex flex-col w-96">
        <p className=" uppercase font-semibold w-full text-center py-10 text-xl text-orange-400">
          Thông tin cá nhân
        </p>
        <div className="flex flex-row justify-between my-5">
          <p>Họ và tên</p>
          <p>
            <input
              type="text"
              value={user.name}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </p>
        </div>
        <div className="flex flex-row justify-between my-5">
          <p>Ngày sinh</p>
          <p>
            <input
              type="date"
              value={user.date}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, date: e.target.value }))
              }
            />
          </p>
        </div>
        <div className="flex flex-row justify-between my-5">
          <p>Giới tính</p>
          <p>
            <select
              value={user.gender}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="0">Another</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
          </p>
        </div>
        <div className="flex flex-row justify-between my-5">
          <p>Email</p>
          <p>
            <input
              type="text"
              value={user.email}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </p>
        </div>
        <div className="flex flex-row justify-between my-5">
          <p>Số điện thoại</p>
          <p>
            <input
              type="text"
              value={user.phone}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          </p>
        </div>
        <div className="flex flex-row justify-between my-5">
          <p>Địa chỉ</p>
          <p>
            <input
              type="text"
              value={user.address}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, address: e.target.value }))
              }
            />
          </p>
        </div>
        <div className="flex flex-row justify-between my-5">
          <p>Mật khẩu mới</p>
          <p>
            <input
              type="password"
              value={user.password || ""}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </p>
        </div>

        <div className="flex flex-row justify-center my-5">
          <button
            className="px-2 py-1  rounded-lg border-double border-4 border-orange-400"
            onClick={handleSubmit}
          >
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
