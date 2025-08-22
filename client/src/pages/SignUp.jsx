import React from "react";
import Google from "../assets/Google.png";
import { useForm } from "react-hook-form";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validatefullname,
} from "../hooks/formValidate";
import axiosInstance from "../hooks/axiosInstance"; // adjust path if different
import { Link, useNavigate } from "react-router";

export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axiosInstance.post("/auth/register", {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      });

      navigate("/");
      console.log("Success:", res.data);
      alert(res.data.message);
    } catch (err) {
      console.error("Error:", err?.response?.data?.message || err.message);
      alert(err?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="w-full p-4">
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-1 leading-tight">
          Join our community of home seekers and explore the possibilities that
          await.
        </h1>
        <p className="text-sm text-gray-600">
          Let’s get started by filling out the information below
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 text-sm">
        {/* Name fields */}
        <div className="md:flex gap-2">
          <div className="md:w-1/2">
            <label className="block mb-1">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered input-sm w-full"
              {...register("firstname", {
                validate: validatefullname,
              })}
            />
            {errors.firstname && (
              <p className="text-red-500 text-xs mt-1">
                {errors.firstname.message}
              </p>
            )}
          </div>
          <div className="md:w-1/2">
            <label className="block mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered input-sm w-full"
              {...register("lastname", {
                validate: validatefullname,
              })}
            />
            {errors.lastname && (
              <p className="text-red-500 text-xs mt-1">
                {errors.lastname.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="input input-bordered input-sm w-full"
            {...register("email", {
              validate: validateEmail,
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            placeholder="********"
            className="input input-bordered input-sm w-full"
            {...register("password", {
              validate: (value) =>
                validatePassword(value, "Password is required"),
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="********"
            className="input input-bordered input-sm w-full"
            {...register("confirmPassword", {
              validate: (value) =>
                value !== watch("password")
                  ? "Passwords do not match"
                  : validateConfirmPassword(
                      value,
                      "Confirm Password is required"
                    ),
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            {...register("terms", { required: "You must accept the terms" })}
            className="checkbox checkbox-sm"
          />
          <p>
            I agree to{" "}
            <span className="text-[#3D9970] underline">Terms of Service</span>{" "}
            and <span className="text-[#3D9970] underline">Privacy Policy</span>
          </p>
        </div>
        {errors.terms && (
          <p className="text-red-500 text-xs mt-1">{errors.terms.message}</p>
        )}

        {/* Sign Up */}
        <button
          type="submit"
          className="btn btn-success btn-sm w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Sign up"}
        </button>

        <div className="text-center text-xs text-gray-500">or</div>

        {/* Google */}
        <button
          type="button"
          className="btn btn-outline btn-sm w-full flex items-center justify-center gap-2"
        >
          <img src={Google} alt="Google" className="w-4 h-4" />
          Continue with Google
        </button>

        {/* Already have account */}
        <Link to={"/auth/signin"}>
          <p className="text-center text-sm mt-1">
            Already have an account?{" "}
            <span className="text-[#3D9970] underline cursor-pointer">
              Sign in
            </span>
          </p>
        </Link>
      </form>
    </div>
  );
}
