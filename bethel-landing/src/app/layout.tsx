import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bethel-Schilo TPC - Connectez-vous avec votre communauté chrétienne",
  description:
    "L'application officielle de la communauté chrétienne Bethel-Schilo. Restez connecté avec vos frères et sœurs en Christ, accédez aux enseignements, participez aux événements en direct et grandissez ensemble dans la foi.",
  keywords: [
    "Bethel-Schilo",
    "application chrétienne",
    "communauté",
    "église",
    "enseignements",
  ],
  author: "Bethel-Schilo",
  icons: {
    icon: "/bethel-logo.png",
  },
  openGraph: {
    title: "Bethel-Schilo TPC - Votre communauté chrétienne",
    description:
      "Connectez-vous avec votre communauté, suivez les enseignements et participez aux événements",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
