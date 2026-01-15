import "./globals.css";

export const metadata = {
  title: "Namma Web Digital Marketing LMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <nav className="bg-black text-white p-4 flex justify-between">
          <h1 className="font-bold">NAMMA WEB LMS</h1>
          <a href="/login">Login</a>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
