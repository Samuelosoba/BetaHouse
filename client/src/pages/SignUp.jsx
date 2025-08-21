import React from "react";
import Google from "../assets/Google.png";

export default function SignUp() {
  return (
    <div className="w-full p-4">
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-1 leading-tight">
          Join our community of home seekers and explore the possibilities that
          await.
        </h1>
        <p className="text-sm text-gray-600">
          Lets get started by filling out the information below
        </p>
      </div>

      <form className="space-y-3 text-sm">
        {/* Name fields */}
        <div className="md:flex gap-2">
          <div className="md:w-1/2">
            <label className="block mb-1">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered input-sm w-full"
            />
          </div>
          <div className="md:w-1/2">
            <label className="block mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered input-sm w-full"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="input input-bordered input-sm w-full"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            placeholder="********"
            className="input input-bordered input-sm w-full"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="********"
            className="input input-bordered input-sm w-full"
          />
        </div>

        {/* Terms */}
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
          <p>
            I agree to{" "}
            <span className="text-[#3D9970] underline">Terms of Service</span>{" "}
            and <span className="text-[#3D9970] underline">Privacy Policy</span>
          </p>
        </div>

        {/* Sign Up */}
        <button className="btn btn-success btn-sm w-full">Sign up</button>

        <div className="text-center text-xs text-gray-500">or</div>

        {/* Google */}
        <button className="btn btn-outline btn-sm w-full flex items-center justify-center gap-2">
          <img src={Google} alt="Google" className="w-4 h-4" />
          Continue with Google
        </button>

        {/* Already have account */}
        <p className="text-center text-sm mt-1">
          Already have an account?{" "}
          <span className="text-[#3D9970] underline cursor-pointer">
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
}
