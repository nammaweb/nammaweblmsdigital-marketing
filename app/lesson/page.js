"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const syllabus = Array.from({ length: 60 }, (_, i) => ({
  day: i + 1,
  title:
    i < 30
      ? `Theory Topic ${i + 1}`
      : `Live Project Task ${i + 1}`,
  content:
    i < 30
      ? "Learn advanced digital marketing strategies using AI tools."
      : "Apply strategies practically for Namma Web digital growth."
}));

export default function LessonPage() {
  const [day, setDay] = useState(1);
  const [name, setName] = useState("");
  const [currentDay, setCurrentDay] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const d = Number(params.get("day")) || 1;
    setDay(d);

    const storedName = localStorage.getItem("studentName");
    if (!storedName) return;

    setName(storedName);

    const fetchProgress = async () => {
      const studentRef = doc(db, "students", storedName);
      const studentSnap = await getDoc(studentRef);

      if (studentSnap.exists()) {
        setCurrentDay(studentSnap.data().currentDay);
      }
    };

    fetchProgress();
  }, []);

  const lesson = syllabus.find(l => l.day === day);

  const markComplete = async () => {
    if (day >= currentDay) {
      const studentRef = doc(db, "students", name);
      await updateDoc(studentRef, {
        currentDay: currentDay + 1,
        assignmentsCompleted: currentDay
      });
      alert("Assignment marked complete. Next day unlocked!");
      window.location.href = "/course";
    }
  };

  if (day > currentDay) {
    return <h1>🔒 This lesson is locked.</h1>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Day {lesson.day}: {lesson.title}</h1>
      <p>{lesson.content}</p>

      <h3>Assignment:</h3>
      <p>
        Apply this topic for Namma Web and email your work to:
        <strong> nammaweb.assist@gmail.com</strong>
      </p>

      <button
        onClick={markComplete}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#22c55e",
          color: "white",
          border: "none",
          borderRadius: "6px"
        }}
      >
        Mark as Complete
      </button>
    </div>
  );
}
