"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Course() {

  const [currentDay, setCurrentDay] = useState(1);

  useEffect(() => {
    const fetch = async () => {
      const name = localStorage.getItem("studentName");
      const snap = await getDoc(doc(db, "students", name));
      if (snap.exists()) setCurrentDay(snap.data().currentDay);
    };
    fetch();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Course</h1>

      {Array.from({ length: 60 }, (_, i) => {
        const day = i + 1;
        const unlocked = day <= currentDay;

        return (
          <div
            key={day}
            style={{
              padding: "10px",
              margin: "10px 0",
              background: unlocked ? "#22c55e" : "#334155",
              cursor: unlocked ? "pointer" : "not-allowed"
            }}
            onClick={() => unlocked && (window.location.href = `/lesson?day=${day}`)}
          >
            Day {day} {unlocked ? "" : "🔒"}
          </div>
        );
      })}
    </div>
  );
}
