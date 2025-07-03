import { icons } from "lucide-react";
import Link from "next/link";
import "./globals.css";
import Nav from "@/components/nav_bar/Nav";
import Footer from "@/components/footer/Footer";
import { BsWhatsapp } from "react-icons/bs";
import Script from "next/script";

const GA_ID = "G-JWD0CJD3PZ";

export const metadata = {
  metadataBase: new URL("https://contentcrft.in"),
  title: "ContentCrft – Digital Marketing & Creative Agency",
  description:
    "We help brands grow through custom websites, video production, SEO, and digital strategy. Book a free consultation to level up your online presence.",
  icons: {
    icon: "/logo.jpg",
  },
  openGraph: {
    title: "ContentCrft – Creative Digital Marketing Studio",
    description:
      "Web development, video editing, and marketing solutions that scale. Start your project today.",
    url: "https://contentcrft.in",
    siteName: "ContentCrft",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "ContentCrft Agency Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ContentCrft – Full-Service Creative Agency",
    description: "Results-driven web and video solutions for modern brands.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
          }}
        />
      </head>
      <body>
        <nav>
          <Nav />
        </nav>
        {children}
        <Link
          href="https://wa.me/7318726633"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-105 transition-transform">
            <BsWhatsapp className="text-white w-6 h-6 md:w-8 md:h-8" />
          </div>
        </Link>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
