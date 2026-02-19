const submitQuiz = async () => {

  let calculatedScore = 0;

  questions.forEach((q, index) => {
    if (answers[index] === q.correct) {
      calculatedScore += 5;
    }
  });

  setScore(calculatedScore);

  if (calculatedScore < 40) {
    alert("Minimum 40/50 required.");
    return;
  }

  const snap = await getDoc(doc(db, "students", name));
  const data = snap.data();

  // Only unlock if this is the current lesson
  if (Number(day) === Number(data.currentDay)) {

    await updateDoc(doc(db, "students", name), {
      currentDay: Number(data.currentDay) + 1,
      totalScore: (data.totalScore || 0) + calculatedScore,
      totalCompletedLessons: (data.totalCompletedLessons || 0) + 1,
      rankPoints: (data.rankPoints || 0) + calculatedScore
    });

    alert("Next lesson unlocked!");
    window.location.href = "/course";
  }

};
