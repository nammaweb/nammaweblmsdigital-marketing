"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("student"));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome {name}</h1>
      <div className="grid grid-cols-2 gap-4">
        <a href="/syllabus" className="card">📘 Syllabus</a>
        <a href="/assignments" className="card">📝 Assignments</a>
        <a href="/timetable" className="card">📅 Timetable</a>
        <a href="/rules" className="card">📜 Rules</a>
      </div>
    </div>
  );
}
