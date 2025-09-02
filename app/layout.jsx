import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Combat Frogs Explorer Starter",
  description: "Explorer + Dashboard + Buy (Next.js App Router)"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-7xl mx-auto px-5 py-6">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}