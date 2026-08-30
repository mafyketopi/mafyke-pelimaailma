import type { Metadata } from "next";
import "./globals.css";
import "./feedback.css";
export const metadata: Metadata = { title: "Pythagoraan torjuntajoukot", description: "Matemaattinen toimintapeli Pythagoraan lauseen harjoitteluun.", icons: { icon: "/favicon.svg" } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="fi"><body>{children}</body></html>; }
