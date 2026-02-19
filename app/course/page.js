"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function CoursePage() {
  const [currentDay, setCurrentDay] = useState(1);
  const [name, setName] = useState("");

  useEffect(() => {
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

  const chapters = Array.from({ length: 60 }, (_, i) => ({
    day: i + 1,
    title:
      i < 30
        ? `Theory Class ${i + 1}`
        : `Live Project Class ${i + 1}`
  }));

  return (
    <div style={{ padding: "40px" }}>
      <h1>📘 6-Month Digital Marketing Course</h1>
      <p>Welcome, {name}</p>

      <div style={{ marginTop: "30px" }}>
        {chapters.map((chapter) => {
          const unlocked = chapter.day <= currentDay;

          return (
            <div
              key={chapter.day}
              style={{
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "8px",
                background: unlocked ? "#dcfce7" : "#f3f4f6",
                cursor: unlocked ? "pointer" : "not-allowed",
                opacity: unlocked ? 1 : 0.6
              }}
              onClick={() => {
                if (unlocked) {
                  window.location.href = `/lesson?day=${chapter.day}`;
                }
              }}
            >
              <strong>Day {chapter.day}:</strong> {chapter.title}
              {!unlocked && " 🔒"}
            </div>
          );
        })}
      </div>
    </div>
  );
}
