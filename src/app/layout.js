import Nav from "@/components/Nav";
import "./globals.css";

export const metadata = {
  title: "Week 8",
  description: "App state management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Nav />
        {children}
 
      </body>
    </html>
  );
}
