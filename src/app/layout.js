import Nav from "@/components/Nav";
import "./globals.css";

export const metadata = {
  title: "Cat Group Project 🐈‍⬛",
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
