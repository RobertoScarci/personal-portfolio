import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { metadata } from "./metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var initialTheme = theme || 'dark';
                  if (initialTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  // Fallback: ensure dark is applied
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html { 
                background-color: #0a0a0f !important;
                --background: #0a0a0f;
                --foreground: #ffffff;
              }
              html.dark { 
                background-color: #0a0a0f !important;
                --background: #0a0a0f;
                --foreground: #ffffff;
              }
              html:not(.dark) { 
                background-color: #ffffff !important;
                --background: #ffffff;
                --foreground: #0a0a0a;
              }
              body {
                background-color: #0a0a0f !important;
                color: #ffffff !important;
              }
              html.dark body {
                background-color: #0a0a0f !important;
                color: #ffffff !important;
              }
              html:not(.dark) body {
                background-color: #ffffff !important;
                color: #0a0a0a !important;
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: '#0a0a0f', color: '#ffffff' }}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
