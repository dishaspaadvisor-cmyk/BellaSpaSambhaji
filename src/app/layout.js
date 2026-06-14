import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aurangabad Spa | Luxury spa wellness",
  description:
    "Aurangabad Spa offers premium salon, facial, massage and beauty services with expert care and elegant style.",
  icons: {
    icon: "/logo4.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="ki4l4-yCr0B5dMBNRRaz9jhu_VrSIXMHcWhfaAWtv6o"
        />
      </head>

      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}