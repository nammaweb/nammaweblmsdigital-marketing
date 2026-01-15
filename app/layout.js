export const metadata = {
  title: "Namma Web – Digital Marketing LMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f5f7fb" }}>
        
        {/* NAVBAR */}
        <header style={{
          background: "#0f172a",
          color: "white",
          padding: "16px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <h2>Namma Web</h2>
          <nav style={{ display: "flex", gap: "20px" }}>
            <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
            <a href="/login" style={{ color: "white", textDecoration: "none" }}>Student Login</a>
