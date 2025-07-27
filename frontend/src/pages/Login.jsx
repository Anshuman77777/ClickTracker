import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace this with your login logic (e.g., API call or Firebase)
    alert(`Logged in with ${form.email}`);
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-base-200">
      <form onSubmit={handleLogin} className="card w-full max-w-sm shadow-2xl bg-base-100 p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        {/* Email Input */}
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

        {/* Password Input */}
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

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>
         <a className="link link-info w-full text-center">Signup</a>
      </form>
    </div>
  );
}
