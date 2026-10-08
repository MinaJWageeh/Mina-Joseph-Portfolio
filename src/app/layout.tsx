import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mina Joseph Wageh | Full-Stack Developer & Systems Software Engineer",
  description:
    "Portfolio of Mina Joseph Wageh — Full-Stack Developer & Systems Software Engineer. Honors Electrical Engineering background (Benha University). Specializing in Next.js, Rust, NestJS, PostgreSQL, and enterprise e-commerce at Scandiweb.",
  keywords: [
    "Mina Joseph",
    "Mina Joseph Wageh",
    "Full-Stack Developer",
    "Next.js Developer",
    "Rust Developer",
    "NestJS",
    "PostgreSQL",
    "pgvector",
    "Scandiweb",
    "Magento 2",
    "Hyvä Theme",
    "Cairo Egypt Developer",
    "Systems Engineer"
  ],
  authors: [{ name: "Mina Joseph Wageh", url: "https://github.com/MinaJWageeh" }],
  creator: "Mina Joseph Wageh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/MinaJWageeh",
    title: "Mina Joseph Wageh | Full-Stack Developer & Systems Engineer",
    description:
      "Honors Electrical Engineer turned Full-Stack Systems Craftsman. Building high-performance web systems, real-time engines, and distributed platforms.",
    siteName: "Mina Joseph Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mina Joseph Wageh | Full-Stack Developer & Systems Engineer",
    description:
      "Honors Electrical Engineer turned Full-Stack Systems Craftsman. Building high-performance web systems, real-time engines, and distributed platforms.",
  },
};

export const viewport = {
  themeColor: "#010102",
  width: "device-width",
  initialScale: 1,
};

import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mina Joseph Wageh",
    jobTitle: "Full-Stack Developer & Systems Engineer",
    email: "mailto:minajoseph997@gmail.com",
    telephone: "+201098734124",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "Egypt"
    },
    alumnusOf: {
      "@type": "CollegeOrUniversity",
      name: "Benha University (Shubra Faculty of Engineering)"
    },
    sameAs: [
      "https://github.com/MinaJWageeh",
      "https://www.linkedin.com/in/minajoseph10"
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('mj_theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased selection:bg-[#5e6ad2] selection:text-white transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
