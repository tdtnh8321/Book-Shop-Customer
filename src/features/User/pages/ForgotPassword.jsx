import { useState } from "react";
import userQuery from "../../../queries/UserQuery";
import { toast } from "react-hot-toast";

function ForgotPassword(props) {
  const [data, setData] = useState({ email: "", err: "", success: "" });
  const { email, err, success } = data;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };
  const [isMutation, setIsMutation] = useState(false);
  const { mutateAsync: forgotPassword } = userQuery.forgotPassword(isMutation);
  const handleSubmitForgotPassword = async () => {
    try {
      setIsMutation((prev) => true);
      const res = await forgotPassword({ email });
      console.log(res.msg);
      toast.success(res.msg, { position: "top-right" });
      setIsMutation((prev) => false);
      return setData({ ...data, err: "", success: res.msg });
    } catch (err) {
      err.response.data.msg &&
        setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };
  return (
    <div className="w-full px-10 flex flex-col">
      <p className=" uppercase font-semibold w-full text-center py-10 text-xl text-orange-400">
        Quên mật khẩu
      </p>
      <div className="px-[550px] flex flex-row justify-between py-5">
        <p>Nhập email</p>
        <input
          className="text-orange-600"
          type="text"
          name="email"
          value={email}
          onChange={handleChangeInput}
        />
      </div>
      <div className="w-full flex flex-row justify-center">
        <button
          className="px-2 py-1 rounded-lg text-orange-400 border-double border-4 border-orange-600"
          onClick={handleSubmitForgotPassword}
        >
          Xác nhận Email
        </button>
      </div>
      {/* {data.success} */}
    </div>
  );
}

export default ForgotPassword;
