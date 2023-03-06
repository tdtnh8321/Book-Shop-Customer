import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import userQuery from "../../../queries/UserQuery";
function ActivateEmail(props) {
  const { activation_token } = useParams();
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [isMutation, setIsMutation] = useState(false);
  const { mutateAsync: activateEmail } = userQuery.activateEmail(isMutation);
  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          setIsMutation((prev) => true);
          const res = await activateEmail({ activation_token });
          console.log(res.msg);
          setSuccess(res.msg);
          setIsMutation((prev) => false);
        } catch (err) {
          err.response.data.msg && setErr(err.response.data.msg);
        }
      };
      activationEmail();
    }
  }, [activation_token]);
  return (
    <div className="w-full px-10 flex flex-col">
      <p className=" uppercase font-semibold w-full text-center py-10 text-xl text-orange-400">
        Xác minh Email
      </p>
      {err}
      {success}
    </div>
  );
}

export default ActivateEmail;
