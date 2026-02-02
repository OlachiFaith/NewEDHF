import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";
import ContactUs from "@/components/contactUs/contactUs"


export const metadata: Metadata = {
  title: "Elisha Development and Humanitarian Foundation",
  description: "Making Lives and Communities Better",
  icons: {
    icon: "/Logo.png",
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ position: "relative", overflowX: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: "-8.3125rem",
            left: "-6.5rem",
            width: "36.625rem",
            height: "36.625rem",
            borderRadius: "36.625rem",
            background: "rgba(0, 51, 153, 0.15)",
            filter: "blur(150px)",
            zIndex: -1,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "25.6875rem",
            // left: "76.75rem",
            right: "-6.1%",
            width: "23.875rem",
            height: "23.875rem",
            borderRadius: "23.875rem",
            background: "rgba(177, 104, 234, 0.50)",
            filter: "blur(150px)",
            zIndex: -1,
          }}
        ></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
