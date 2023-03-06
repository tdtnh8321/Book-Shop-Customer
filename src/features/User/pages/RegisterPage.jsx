import { useState } from "react";
import { NavLink } from "react-router-dom";
import userQuery from "../../../queries/UserQuery";

function RegisterPage(props) {
  const [user, setUser] = useState({});
  console.log(user);

  const [isMutation, setIsMutation] = useState(false);
  const { mutateAsync: register } = userQuery.register(isMutation);
  const handleSubmit = async () => {
    setIsMutation((prev) => true);
    const res = await register(user);
    console.log(res);
    setIsMutation((prev) => false);
  };

  return (
    <section class="w-full min-h-screen p-5">
      <div class="flex flex-col items-center justify-center mx-auto ">
        <div class="w-full bg-white rounded-lg max-w-md ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-orange-400 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <div class="space-y-4 md:space-y-6 text-orange-600">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium ">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-orange-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Name..."
                  required=""
                  value={user.name}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>
              <div>
                <label for="gender" class="block mb-2 text-sm font-medium ">
                  Your gender
                </label>
                <select
                  id="gender"
                  value={user.gender}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, gender: e.target.value }))
                  }
                >
                  <option value="0">Another</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
              </div>
              <div>
                <label for="phone" class="block mb-2 text-sm font-medium ">
                  Your Birthday
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  class="bg-gray-50 border border-orange-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Phone..."
                  required=""
                  value={user.date}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, date: e.target.value }))
                  }
                />
              </div>
              <div>
                <label for="phone" class="block mb-2 text-sm font-medium ">
                  Your Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  class="bg-gray-50 border border-orange-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Phone..."
                  required=""
                  value={user.phone}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              </div>
              <div>
                <label for="phone" class="block mb-2 text-sm font-medium ">
                  Your Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  class="bg-gray-50 border border-orange-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Address..."
                  required=""
                  value={user.address}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, address: e.target.value }))
                  }
                />
              </div>
              <div>
                <label for="email" class="block mb-2 text-sm font-medium ">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  value={user.email}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium  ">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={user.password}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, password: e.target.value }))
                  }
                />
              </div>
              {/* <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={user.confirm}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, confirm: e.target.value }))
                  }
                />
              </div> */}
              <div className="w-full flex flex-row justify-center">
                <button
                  onClick={handleSubmit}
                  class="px-2 py-1 text-orange-400 rounded-lg border-double border-4 border-orange-600"
                >
                  Create an account
                </button>
              </div>

              <p class="text-sm font-light ">
                Already have an account?{" "}
                <NavLink
                  to="/user/login"
                  className={`font-medium  hover:underline`}
                >
                  Login here
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
