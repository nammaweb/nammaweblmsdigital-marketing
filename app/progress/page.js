"use client";

export default function ProgressPage() {
  // Dummy data (backend will replace later)
  const totalDays = 180;
  const completedDays = 42;
  const totalAssignments = 24;
  const completedAssignments = 9;

  const progressPercent = Math.round((completedDays / totalDays) * 100);

  return (
    <div>
      <h1>📈 Your Learning Progress</h1>
      <p style={{ color: "#475569", marginBottom: "30px" }}>
        Track your course completion and assignment status.
      </p>

      {/* OVERALL PROGRESS */}
      <section style={card}>
        <h2>Overall Course Progress</h2>

        <div style={progressBox}>
          <div
            style={{
              ...progressBar,
              width: `${progressPercent}%`
            }}
          />
        </div>

        <p style={{ marginTop: "10px" }}>
          <strong>{progressPercent}%</strong> completed
        </p>
        <p style={{ color: "#475569" }}>
          Day {completedDays} of {totalDays}
        </p>
      </section>

      {/* STATS */}
      <section style={grid}>
        <StatCard
          title="📅 Days Completed"
          value={`${completedDays} / ${totalDays}`}
        />
        <StatCard
          title="📝 Assignments Completed"
          value={`${completedAssignments} / ${totalAssignments}`}
        />
        <StatCard
          title="⏳ Course Status"
          value="In Progress"
        />
      </section>

      {/* CERTIFICATION INFO */}
      <section style={noteBox}>
        <h3>🎓 Certification Eligibility</h3>
        <ul>
          <li>Minimum 75% course completion required</li>
          <li>All mandatory assignments must be completed</li>
          <li>Final exam must be passed</li>
          <li>No fee refund policy applies</li>
        </ul>
      </section>
    </div>
  );
}

/* COMPONENT */

function StatCard({ title, value }) {
  return (
    <div style={statCard}>
      <h3>{title}</h3>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
}

/* STYLES */

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  marginBottom: "30px"
};

const progressBox = {
  width: "100%",
  height: "16px",
  background: "#e5e7eb",
  borderRadius: "20px",
  overflow: "hidden",
  marginTop: "10px"
};

const progressBar = {
  height: "100%",
  background: "#2563eb",
  borderRadius: "20px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
  marginBottom: "40px"
};

const statCard = {
  background: "white",
  padding: "25px",
  borderRadius: "14px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
};

const noteBox = {
  background: "#f1f5f9",
  padding: "25px",
  borderRadius: "14px"
};
