"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { syllabus } from "../../data/syllabus";

export default function LessonPage() {
  const [day, setDay] = useState(1);
  const [currentDay, setCurrentDay] = useState(1);
  const [name, setName] = useState("");
  const [score, setScore] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const d = Number(params.get("day")) || 1;
    setDay(d);

    const storedName = localStorage.getItem("studentName");
    if (!storedName) return;

    setName(storedName);

    const fetchProgress = async () => {
      const studentRef = doc(db, "students", storedName);
      const snap = await getDoc(studentRef);
      if (snap.exists()) {
        setCurrentDay(snap.data().currentDay);
      }
    };

    fetchProgress();
  }, []);

  const lesson = syllabus[day];

  const handlePass = async () => {
    if (day === currentDay) {
      const studentRef = doc(db, "students", name);
      await updateDoc(studentRef, {
        currentDay: currentDay + 1
      });
      alert("Next lesson unlocked!");
      window.location.href = "/course";
    }
  };

  if (!lesson) return <h1>Lesson Not Found</h1>;
  if (day > currentDay) return <h1>🔒 This lesson is locked</h1>;

  return (
    <div style={{
      padding: "40px",
      minHeight: "100vh",
      background: "linear-gradient(135deg,#0f172a,#1e293b)",
      color: "white"
    }}>
      <h1>Day {day}: {lesson.title}</h1>

      <iframe
        width="100%"
        height="350"
        src={lesson.video}
        allowFullScreen
      />

      <h2>📘 Notes</h2>
      <pre style={{ whiteSpace: "pre-wrap" }}>{lesson.notes}</pre>

      <h2>🛠 Assignment</h2>
      <pre style={{ whiteSpace: "pre-wrap" }}>{lesson.assignment}</pre>

      <p>Submit to: nammaweb.assist@gmail.com</p>

      <button
        onClick={handlePass}
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          background: "#22c55e",
          border: "none",
          borderRadius: "8px",
          color: "white",
          fontWeight: "bold"
        }}
      >
        Mark Complete & Unlock Next
      </button>
    </div>
  );
}
