import Navbar from "./components/Navbar";
import AuthContext from "./context/AuthContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-gray-100">
        <AuthContext>
          <div className="m-auto mb-4 min-h-screen max-w-screen-2xl bg-white pb-4">
            <Navbar />
            {children}
          </div>
        </AuthContext>
      </body>
    </html>
  );
}
