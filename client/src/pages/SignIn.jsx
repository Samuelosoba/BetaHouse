import React from "react";
import { Link } from "react-router";
import Google from "../assets/Google.png"

export default function SignIn() {
  return (
    <div className="w-full p-4">
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-1 leading-tight">
          Welcome Back to BetaHouse!
        </h1>
        <p className="text-sm text-gray-600">
          Lets get started by filling out the information below
        </p>
      </div>

      <form className="space-y-3 text-sm">
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered input-sm w-full"
          />
        </div>

        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            placeholder="********"
            className="input input-bordered input-sm w-full"
          />
        </div>

        <div className="flex justify-between">
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              className="appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg-green-600 checked:border-green-600 checked:text-white flex items-center justify-center"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <p>Remember Me</p>
          </div>
          <Link className="text-red-500">Forgot Password?</Link>
        </div>

        {/* Sign Up */}
        <button className="btn btn-success btn-sm w-full">Sign In</button>

        <div className="text-center text-xs text-gray-500">or</div>

        {/* Google */}
        <button className="btn btn-outline btn-sm w-full flex items-center justify-center gap-2">
          <img src={Google} alt="Google" className="w-4 h-4" />
          Continue with Google
        </button>

        {/* Already have account */}
        <p className="text-center text-sm mt-1">
          New?{" "}
          <span className="text-[#3D9970] underline cursor-pointer">
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
}
