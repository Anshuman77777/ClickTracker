import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link,  useNavigate } from "react-router-dom";
import { login } from "../apis/auth";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const {loginLocal}=useAuth();
  const nav =useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const result = await login(form.email, form.password);
      loginLocal({
        email:result.email,
        id:result.id,
        role:result.id
      },result.token);
      alert(result);
      nav('/');

    } catch (error) {
      alert(error.message);
    }

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
        <Link to='/signup' className="link link-info w-full text-center">Signup</Link>
      </form>
    </div>
  );
}
