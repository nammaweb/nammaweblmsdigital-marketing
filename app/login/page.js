"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "../../lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function Login() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    if (password !== "9241") {
      alert("Wrong password");
      return;
    }

    const studentRef = doc(db, "students", name);
    const snap = await getDoc(studentRef);

    if (!snap.exists()) {
      await setDoc(studentRef, {
        name,
        currentDay: 1,
        totalScore: 0,
        totalCompletedLessons: 0,
        finalExamPassed: false,
        rankPoints: 0
      });
    }

    localStorage.setItem("studentName", name);
    router.push("/dashboard");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Login</h1>
      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
