export default function Loader({ text = "Loading..." }) {
  return (
    <div style={container}>
      <div style={spinner}></div>
      <p style={{ marginTop: "12px", color: "#475569" }}>{text}</p>
    </div>
  );
}

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px"
};

const spinner = {
  width: "36px",
  height: "36px",
  border: "4px solid #e5e7eb",
  borderTop: "4px solid #2563eb",
  borderRadius: "50%",
  animation: "spin 1s linear infinite"
};
