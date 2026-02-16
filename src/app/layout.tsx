import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Kabeer Alabi Portfolio",
  description: "Kabeer Alabi's portfolio showcasing projects, skills, and experience in software development and data analysis, and project management.",
  openGraph: {
    title: "Kabeer Alabi  Portfolio",
    description: "Kabeer Alabi's portfolio showcasing projects, skills, and experience in software development and data analysis, and project management.",
    url: "https://kabeeralabi.netlify.app/",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased font-sans">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
