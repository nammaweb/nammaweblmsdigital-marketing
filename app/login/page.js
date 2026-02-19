"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function LoginPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    if (password !== "9241") {
      setError("Invalid password");
      return;
    }

    try {
      const studentRef = doc(db, "students", name);
      const studentSnap = await getDoc(studentRef);

      if (!studentSnap.exists()) {
        await setDoc(studentRef, {
          name: name,
          currentDay: 1,
          assignmentsCompleted: 0,
          createdAt: new Date()
        });
      }

      localStorage.setItem("studentName", name);
      router.push("/dashboard");

    } catch (err) {
      setError("Login failed. Check Firebase setup.");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Namma Web LMS Login</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "8px" }}
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "8px" }}
      />

      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Login
      </button>
    </div>
  );
}
