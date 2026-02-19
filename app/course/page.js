"use client";

const chapters = Array.from({ length: 60 }, (_, i) => ({
  day: i + 1,
  title:
    i < 30
      ? `Theory Class ${i + 1}`
      : `Live Project Class ${i + 1}`
}));

export default function CoursePage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>📘 6-Month Digital Marketing Course</h1>

      <div style={{ marginTop: "30px" }}>
        {chapters.map((chapter) => (
          <div
            key={chapter.day}
            style={{
              padding: "15px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px"
            }}
          >
            <strong>Day {chapter.day}:</strong> {chapter.title}
          </div>
        ))}
      </div>
    </div>
  );
}
