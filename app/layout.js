export const metadata = {
  title: "Namma Web LMS",
  description: "Digital Marketing & AI LMS"
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        style={{
          margin: 0,
          fontFamily: "Inter, sans-serif",
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          color: "white"
        }}
      >
        {children}
      </body>
    </html>
  );
}
