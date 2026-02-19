"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Certificate() {

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

  if (!student.finalExamPassed)
    return <h1>You must pass Final Exam to access certificate.</h1>;

  return (
    <div style={{
      padding: "40px",
      textAlign: "center",
      border: "5px solid gold",
      margin: "50px"
    }}>

      <h1>🏆 Certificate of Completion</h1>

      <h2>This is to certify that</h2>

      <h1>{student.name}</h1>

      <h3>
        has successfully completed the
        6-Month Digital Marketing & AI Program
      </h3>

      <p>
        Issued by Namma Web
      </p>

      <p>
        Date: {new Date().toLocaleDateString()}
      </p>

    </div>
  );
}
