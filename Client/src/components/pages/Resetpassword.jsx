import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { resetPassword } from "../../Api/Query/userQuery";
import { useNavigate, useParams } from "react-router-dom";

const Resetpassword = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [updatePassword, setUpdatePassword] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });
  // handle form validate
  const validFormValues = Object.values(updatePassword).every((value) => value);
  
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

    // handle show error or success messages
  useEffect(() => {
    if (errorMessage || successMessage) {
      let timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage, successMessage]);

    // handle onChange form Input
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUpdatePassword({
      ...updatePassword,
      [name]: value,
    });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // validation
      if (updatePassword.newPassword !== updatePassword.confirmNewPassword) {
        setErrorMessage(response.data.message);
      }

      const response = await resetPassword({
        id,
        newPassword: updatePassword.newPassword,
        confirmNewPassword: updatePassword.confirmNewPassword,
      });

      if (response.data.error) {
        setErrorMessage(response.data.message);
      }

      if (response.data.success) {
        navigate("/login");
      }
    } catch (error) {
      setErrorMessage("Password does not match.");
    }
  };

  return (
    <section className="container w-full mx-auto px-2">
      <div className="bg-white my-2 w-full max-w-lg mx-auto rounded py-2 px-4">
        <p>Reset Password</p>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-600">{successMessage}</p>}
        <div>
          <form
            className="flex gap-3 flex-col mt-4 py-2"
            onSubmit={handleSubmit}
          >
            <label htmlFor="newPassword">New Password *</label>
            <div className="outline-0 bg-blue-50 rounded border flex items-center focus-within:border-yellow-300">
              <input
                className=" bg-blue-50 w-full rounded px-2 py-1 outline-none focus:border-yellow-300"
                type={showPassword1 ? "text" : "password"}
                name="newPassword"
                id="newPassword"
                required
                placeholder="Enter New Password"
                autoFocus
                autoComplete="newPassword"
                value={updatePassword.newPassword}
                onChange={handleOnChange}
              />
              <span
                className="cursor-pointer"
                onClick={() => setShowPassword1((prev) => !prev)}
              >
                {showPassword1 ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
              </span>
            </div>
            <label htmlFor="confirmNewPassword">Confirm NewPassword *</label>
            <div className="outline-0 bg-blue-50 rounded border flex items-center focus-within:border-yellow-300">
              <input
                className=" bg-blue-50 w-full rounded px-2 py-1 outline-none focus:border-yellow-300"
                type={showPassword ? "text" : "password"}
                name="confirmNewPassword"
                id="confirmNewPassword"
                autoComplete="confirmNewPassword"
                required
                placeholder="Enter Confirm Password"
                value={updatePassword.confirmNewPassword}
                onChange={handleOnChange}
              />

              <span
                className="cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
              </span>
            </div>

            <button
              disabled={!validFormValues}
              type="submit"
              className={`${
                validFormValues ? "bg-green-800" : "bg-gray-600"
              } "mt-4 border py-2 bg-green-800 ${
                validFormValues ? " hover:bg-green-700" : ""
              } rounded text-white font-bold"`}
            >
              Reset Password
            </button>
          </form>
        </div>
        {/* 
        <p>
          Already Hava Account?{" "}
          <Link
            to={"/login"}
            className="text-green-800 font-semibold hover:text-green-600"
          >
            Log In
          </Link>
        </p> */}
      </div>
    </section>
  );
};

export default Resetpassword;