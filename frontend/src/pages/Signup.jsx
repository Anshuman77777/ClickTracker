import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";

export default function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return alert("Passwords do not match");
    }
    // Continue with signup logic here (e.g., API call)
    alert("Signed up successfully!");
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-base-200">
      <form onSubmit={handleSignup} className="card w-full max-w-sm shadow-2xl bg-base-100 p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        {/* Email Field */}
        <label className="input input-bordered flex items-center gap-2">
          <Mail size={18} />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="grow"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        {/* Password Field */}
        <label className="input input-bordered flex items-center gap-2">
          <Lock size={18} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="grow"
            value={form.password}
            onChange={handleChange}
            required
          />
        </label>

        {/* Confirm Password Field */}
        <label className="input input-bordered flex items-center gap-2">
          <Lock size={18} />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="grow"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">
          Create Account
        </button>
    <a className="link link-info w-full text-center">Login</a>
      </form>
    </div>
  );
}


