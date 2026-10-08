import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Robson Soares | Portfólio Full Stack",
  description: "Portfólio cyberpunk e de alta performance de Robson Soares",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        {/* Script nativo para prevenir flash do tema no carregamento */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                let theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-white selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}