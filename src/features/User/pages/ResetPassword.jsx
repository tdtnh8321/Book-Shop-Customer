import { useState } from "react";
import { useParams } from "react-router-dom";
import userQuery from "../../../queries/UserQuery";
import { toast } from "react-hot-toast";
const initialState = {
  password: "",
  cf_password: "",
  err: "",
  success: "",
};
function ResetPassword(props) {
  const [data, setData] = useState(initialState);
  const { token } = useParams();

  const { password, cf_password, err, success } = data;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };
  const [isMutation, setIsMutation] = useState(false);
  const { mutateAsync: resetPassword } = userQuery.resetPassword(isMutation);
  const handleResetPass = async () => {
    if (password !== cf_password)
      return setData({ ...data, err: "Password did not match.", success: "" });

    try {
      setIsMutation((prev) => true);
      const res = await resetPassword({ password, token });
      console.log(res.msg);
      toast.success(res.msg, { position: "top-right" });
      setIsMutation((prev) => false);

      return setData({ ...data, err: "", success: res.msg });
    } catch (err) {
      toast.error(err.response.data.msg, { position: "top-right" });
      err.response.data.msg &&
        setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };
  return (
    <div className="w-full px-10">
      <div className="w-full px-10 flex flex-col ">
        <p className=" uppercase font-semibold w-full text-center py-10 text-xl text-orange-400">
          Reset your Password
        </p>
        {/* {token} */}
        {/* {err}
        {success} */}
        <div className="flex flex-row justify-between px-96 py-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>
        <div className="flex flex-row justify-between px-96 py-2">
          <label htmlFor="cf_password">Confirm Password</label>
          <input
            type="password"
            name="cf_password"
            id="cf_password"
            value={cf_password}
            onChange={handleChangeInput}
          />
        </div>
        <div className="w-full flex flex-row justify-center py-10">
          <button
            className="px-2 py-1 rounded-lg text-orange-400 border-double border-4 border-orange-600"
            onClick={handleResetPass}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
