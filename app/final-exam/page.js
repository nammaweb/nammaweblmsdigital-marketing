"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function FinalExam() {

  const [student, setStudent] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

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

  if (student.totalCompletedLessons < 60)
    return <h1>Complete all 60 lessons to unlock Final Exam.</h1>;

  const questions = Array.from({ length: 50 }, (_, i) => ({
    question: `Final Exam Question ${i + 1}`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: 1
  }));

  const submitExam = async () => {

    let calculated = 0;

    questions.forEach((q, i) => {
      if (answers[i] === q.correct) calculated += 2;
    });

    setScore(calculated);

    if (calculated >= 70) {

      await updateDoc(doc(db, "students", student.name), {
        finalExamPassed: true
      });

      alert("Congratulations! You are Certified.");
    } else {
      alert("Minimum 70% required to pass.");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Final Certification Exam</h1>
      <h3>Total Questions: 50 | Pass: 70%</h3>

      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <p>{i + 1}. {q.question}</p>
          {q.options.map((opt, j) => (
            <div key={j}>
              <input
                type="radio"
                name={`q${i}`}
                onChange={() =>
                  setAnswers({ ...answers, [i]: j })
                }
              /> {opt}
            </div>
          ))}
        </div>
      ))}

      <button onClick={submitExam}>
        Submit Final Exam
      </button>

      {score !== null && (
        <h3>Your Score: {score} / 100</h3>
      )}
    </div>
  );
}
