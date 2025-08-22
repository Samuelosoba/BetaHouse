import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Google from "../assets/Google.png";
import axiosInstance from "../hooks/axiosInstance";
import { validateEmail, validatePassword } from "../hooks/formValidate";

export default function SignIn() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axiosInstance.post("/auth/login", {
        email: data.email,
        password: data.password,
      });

      console.log(" Login successful:", res.data);
      alert(res.data.message);

    
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.accessToken);

     
      navigate("/");
    } catch (err) {
      console.error(
        " Login error:",
        err?.response?.data?.message || err.message
      );
      alert(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="w-full p-4">
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-1 leading-tight">
          Welcome Back to BetaHouse!
        </h1>
        <p className="text-sm text-gray-600">
          Let's get started by filling out the information below
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 text-sm">
        {/* Email */}
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
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

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="checkbox checkbox-sm" />
            <span>Remember Me</span>
          </label>
          <Link className="text-red-500 text-sm" to="/forgot-password">
            Forgot Password?
          </Link>
        </div>

        {/* Sign In */}
        <button
          type="submit"
          className="btn btn-success btn-sm w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
        </button>

        <div className="text-center text-xs text-gray-500">or</div>

        {/* Google Sign In */}
        <button
          type="button"
          className="btn btn-outline btn-sm w-full flex items-center justify-center gap-2"
        >
          <img src={Google} alt="Google" className="w-4 h-4" />
          Continue with Google
        </button>

        {/* Sign Up Link */}

        <p className="text-center text-sm mt-1">
          New?{" "}
          <Link to="/auth/signup" className="text-[#3D9970] underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
