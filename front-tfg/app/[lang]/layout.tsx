import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Usamos Inter como pedía tu script
import "./../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AutoMaint - Car Historial",
  description: "TFG Car Historial Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Importante para los iconos */}
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" 
        />
      </head>
      <body className={`${inter.variable} antialiased select-none`}>
        {children}
      </body>
    </html>
  );
}