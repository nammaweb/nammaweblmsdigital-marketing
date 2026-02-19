"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { syllabus } from "../../data/syllabus";

export default function Lesson() {

  const [day, setDay] = useState(1);
  const [currentDay, setCurrentDay] = useState(1);
  const [name, setName] = useState("");
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const d = Number(params.get("day")) || 1;
    setDay(d);

    const studentName = localStorage.getItem("studentName");
    setName(studentName);

    const fetch = async () => {
      const snap = await getDoc(doc(db, "students", studentName));
      if (snap.exists()) setCurrentDay(snap.data().currentDay);
    };

    fetch();
  }, []);

  const lesson = syllabus[day];

  const submitQuiz = async () => {

    let calculated = 0;

    lesson.quiz.forEach((q, i) => {
      if (answers[i] === q.correct) calculated += 5;
    });

    setScore(calculated);

    if (calculated >= 40 && day === currentDay) {

      const snap = await getDoc(doc(db, "students", name));
      const data = snap.data();

      await updateDoc(doc(db, "students", name), {
        currentDay: currentDay + 1,
        totalScore: (data.totalScore || 0) + calculated,
        totalCompletedLessons: (data.totalCompletedLessons || 0) + 1,
        rankPoints: (data.rankPoints || 0) + calculated
      });

      alert("Next lesson unlocked!");
    } else {
      alert("Minimum 40/50 required.");
    }
  };

  if (!lesson) return <h1>Lesson not found</h1>;
  if (day > currentDay) return <h1>🔒 Locked</h1>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Day {day}: {lesson.title}</h1>

      <iframe width="100%" height="350" src={lesson.video} />

      <pre>{lesson.notes}</pre>

      <h3>Quiz</h3>

      {lesson.quiz.map((q, i) => (
        <div key={i}>
          <p>{q.question}</p>
          {q.options.map((opt, j) => (
            <div key={j}>
              <input
                type="radio"
                name={`q${i}`}
                onChange={() => setAnswers({ ...answers, [i]: j })}
              /> {opt}
            </div>
          ))}
        </div>
      ))}

      <button onClick={submitQuiz}>Submit Quiz</button>

      {score && <h3>Score: {score}/50</h3>}
    </div>
  );
}
