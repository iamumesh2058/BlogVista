import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: "BlogVista"
  },
  description: "Blog page to share your opinios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen mx-4 md:mx-10 lg:mx-24 flex flex-col justify-between relative overflow-hidden">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
