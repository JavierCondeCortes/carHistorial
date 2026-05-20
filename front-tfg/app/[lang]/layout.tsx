import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";
import "./../globals.css";

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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional"
        />
      </head>
      <body className="antialiased select-none">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
