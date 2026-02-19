"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Dashboard() {

  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const name = localStorage.getItem("studentName");
      if (!name) return;

      const snap = await getDoc(doc(db, "students", name));
      if (snap.exists()) setStudent(snap.data());
    };

    fetchData();
  }, []);

  if (!student) return <h1>Loading...</h1>;

  const progress = (student.totalCompletedLessons / 60) * 100;

  return (
    <div style={{ padding: "40px" }}>

      <h1>Welcome, {student.name}</h1>

      <h3>Progress: {progress.toFixed(1)}%</h3>
      <p>Total Score: {student.totalScore}</p>

      <div style={{
        height: "20px",
        background: "#1e293b",
        borderRadius: "10px",
        overflow: "hidden",
        marginBottom: "20px"
      }}>
        <div style={{
          width: `${progress}%`,
          background: "#22c55e",
          height: "100%"
        }} />
      </div>

      <div style={{ marginTop: "20px" }}>
        <a href="/course">📘 Continue Learning</a>
      </div>

      <div style={{ marginTop: "10px" }}>
        <a href="/leaderboard">🏆 Leaderboard</a>
      </div>

      <div style={{ marginTop: "10px" }}>
        <a href="/final-exam">🎓 Take Final Exam</a>
      </div>

      <div style={{ marginTop: "10px" }}>
        <a href="/certificate">📜 View Certificate</a>
      </div>

    </div>
  );
}
