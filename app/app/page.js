"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = () => {
    if (password === "9241") {
      localStorage.setItem("student", name);
      router.push("/dashboard");
    } else {
      alert("Invalid password");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 mt-20 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Student Login</h2>
      <input className="border p-2 w-full mb-3" placeholder="Your Name"
        onChange={e=>setName(e.target.value)} />
      <input className="border p-2 w-full mb-3" placeholder="Password"
        type="password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={login}
        className="bg-green-600 text-white w-full p-2 rounded">
        Login
      </button>
    </div>
  );
}
