import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";

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

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18253096902"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'AW-18253096902');`}
        </Script>
        <Script id="gtag-conversion" strategy="afterInteractive">
          {`gtag('event', 'conversion', {
            send_to: 'AW-18253096902/kgt9CNSH9cEcEMbP4P9D',
            value: 1.0,
            currency: 'INR',
            transaction_id: ''
          });`}
        </Script>
        <Script id="gtag-report-conversion" strategy="afterInteractive">
          {`function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof url !== 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              send_to: 'AW-18253096902/kgt9CNSH9cEcEMbP4P9D',
              value: 1.0,
              currency: 'INR',
              transaction_id: '',
              event_callback: callback
            });
            return false;
          }`}
        </Script>


      </head>

      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
         <ChatBot />
      </body>
    </html>
  );
}