import { Geist, Geist_Mono } from "next/font/google";
import "./styles/main.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Inventory Service",
  description: "Created by NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
        {children}
      </body>
    </html>
  );
}
