import React from 'react'
import { useState } from "react";

function CreateUrl() {
  const [form, setForm] = useState({ name: "", original_url: "" });
  const [error, setError] = useState("");

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidUrl(form.original_url)) {
      setError("Please enter a valid URL (must include https:// or http://)");
      return;
    }

    setError("");
    console.log("Submitted:", form);
    
    // submit to server or store in state

    window.location.href='/';
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    
      <form
        onSubmit={handleSubmit}
        className=" shadow-lg p-8 rounded-lg w-full h-full space-y-4"
      >
        <h2 className="text-2xl font-semibold text-white">Add New URL</h2>

        <div>
          <label className="block text-gray-600 font-medium mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="e.g. My new Saas!"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Original URL
          </label>
          <input
            name="original_url"
            value={form.original_url}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="https://example.com"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
   
  );
}

export default CreateUrl