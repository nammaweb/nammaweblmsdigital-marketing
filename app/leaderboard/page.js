"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Leaderboard() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const snap = await getDocs(collection(db, "students"));
      const data = [];
      snap.forEach(doc => data.push(doc.data()));
      data.sort((a, b) => b.rankPoints - a.rankPoints);
      setStudents(data);
    };
    fetch();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Leaderboard</h1>

      {students.slice(0, 10).map((s, i) => (
        <div key={i}>
          {i + 1}. {s.name} — {s.rankPoints} points
        </div>
      ))}
    </div>
  );
}
