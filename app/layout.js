import "./globals.css";
export const metadata = {
  title: "Namma Web – Digital Marketing LMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Inter, Arial, sans-serif", background: "#f8fafc" }}>

        {/* HEADER */}
        <header style={{
          background: "white",
          padding: "14px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="/logo.png" alt="Namma Web Logo" height="40" />
            <strong>Namma Web</strong>
          </div>

          <nav style={{ display: "flex", gap: "20px" }}>
            <a href="/" style={navLink}>Home</a>
            <a href="/login" style={navLink}>Student Login</a>
            <a href="#reviews" style={navLink}>Reviews</a>
            <a href="#contact" style={navLink}>Contact</a>
          </nav>
        </header>

        <main style={{ padding: "40px", minHeight: "80vh" }}>
          {children}
        </main>

        <footer style={{
          background: "#0f172a",
          color: "white",
          textAlign: "center",
          padding: "20px"
        }}>
          © {new Date().getFullYear()} Namma Web • Digital Marketing LMS
        </footer>

      </body>
    </html>
  );
}

const navLink = {
  textDecoration: "none",
  color: "#0f172a",
  fontWeight: "500"
};
