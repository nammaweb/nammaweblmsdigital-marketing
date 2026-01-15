"use client";

export default function AssignmentsPage() {
  return (
    <div>
      <h1>📝 Assignments</h1>
      <p style={{ color: "#475569", marginBottom: "30px" }}>
        Complete assignments regularly to qualify for certification
        and placement opportunities.
      </p>

      <AssignmentCard
        day="Day 5"
        title="Digital Marketing Basics"
        description="Create a digital marketing funnel for a service-based business."
        status="Completed"
      />

      <AssignmentCard
        day="Day 15"
        title="SEO – On Page Optimization"
        description="Optimise one webpage and submit screenshots & report."
        status="Pending"
      />

      <AssignmentCard
        day="Day 30"
        title="Social Media Content Plan"
        description="Create a 15-day Instagram content calendar."
        status="Pending"
      />

      <AssignmentCard
        day="Day 60"
        title="Google Ads Campaign"
        description="Design a Google Ads campaign structure with keywords and ads."
        status="Locked"
      />
    </div>
  );
}

/* COMPONENT */

function AssignmentCard({ day, title, description, status }) {
  const statusColor = {
    Completed: "#16a34a",
    Pending: "#f59e0b",
    Locked: "#94a3b8"
  };

  return (
    <div style={card}>
      <div style={header}>
        <h3>{day} – {title}</h3>
        <span style={{
          background: statusColor[status],
          color: "white",
          padding: "6px 12px",
          borderRadius: "20px",
          fontSize: "12px"
        }}>
          {status}
        </span>
      </div>

      <p>{description}</p>

      {status !== "Locked" && (
        <div style={{ marginTop: "15px" }}>
          <button style={primaryBtn}>Submit Assignment</button>
        </div>
      )}
    </div>
  );
}

/* STYLES */

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "14px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  marginBottom: "20px"
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "10px"
};

const primaryBtn = {
  padding: "10px 20px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold"
};
