import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import ChatInterfaceWrapper from "@/components/chat-interface-wrapper";
import { GoogleAnalytics } from "@/components/google-analytics";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Enhanced SEO metadata
export const metadata: Metadata = {
  title: {
    default: "Anubhav Tandon | Software Engineer & Full Stack Developer",
    template: "%s | Anubhav Tandon",
  },
  description:
    "Portfolio of Anubhav Tandon — Software Engineer & Full Stack Developer specializing in Django, React, Node.js, DevOps, and scalable cloud systems. B.Tech CSE at IIT Jodhpur.",
  applicationName: "Anubhav Tandon Portfolio",
  category: "Portfolio",
  metadataBase: new URL("https://10done.github.io/Portfolio/"),

  keywords: [
    "Anubhav Tandon",
    "Full Stack Developer",
    "Software Engineer",
    "Django Developer",
    "React Developer",
    "Node.js Developer",
    "Python Developer",
    "IIT Jodhpur",
    "Backend Developer",
    "DevOps Engineer",
    "Web Developer",
    "Portfolio",
    "Docker",
    "Ansible",
    "Terraform",
    "Cloud Infrastructure",
  ],

  authors: [{ name: "Anubhav Tandon", url: "https://10done.github.io/Portfolio/" }],
  creator: "Anubhav Tandon",
  publisher: "Anubhav Tandon",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Anubhav Tandon | Software Engineer & Full Stack Developer",
    description:
      "Portfolio of Anubhav Tandon showcasing full-stack web development, backend engineering, DevOps, and cloud infrastructure projects.",
    url: "https://10done.github.io/Portfolio/",
    siteName: "Anubhav Tandon Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anubhav Tandon Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Anubhav Tandon | Software Engineer & Full Stack Developer",
    description:
      "Portfolio of Anubhav Tandon showcasing full-stack web development, backend engineering, and DevOps projects.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },

  other: {
    "google-site-verification": "google4cb1d15e140c9dad.html",
  },
};


// Improved viewport configuration
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* DNS prefetch for faster loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* JSON-LD Structured Data for rich search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://10done.github.io/Portfolio/#website",
                  "url": "https://10done.github.io/Portfolio/",
                  "name": "Anubhav Tandon Portfolio",
                  "description": "Portfolio of Anubhav Tandon — Software Engineer & Full Stack Developer",
                  "publisher": { "@id": "https://10done.github.io/Portfolio/#person" },
                  "inLanguage": "en-US"
                },
                {
                  "@type": "Person",
                  "@id": "https://10done.github.io/Portfolio/#person",
                  "name": "Anubhav Tandon",
                  "url": "https://10done.github.io/Portfolio/",
                  "image": "https://10done.github.io/Portfolio/profile.png",
                  "jobTitle": "Software Engineer & Full Stack Developer",
                  "description": "Software Engineer and B.Tech CSE student at IIT Jodhpur specializing in full-stack development, backend engineering, and DevOps.",
                  "sameAs": [
                    "https://github.com/10done",
                    "https://www.linkedin.com/in/anubhav-tandon-9b8737245/"
                  ],
                  "knowsAbout": [
                    "Full Stack Development",
                    "Django",
                    "React",
                    "Node.js",
                    "Python",
                    "DevOps",
                    "Docker",
                    "Ansible",
                    "Terraform",
                    "Cloud Infrastructure"
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
        suppressHydrationWarning
      >
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          {/* Skip to main content for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Skip to main content
          </a>

          <Navbar />

          {/* Main content with semantic HTML and proper spacing */}
          <main id="main-content" className="relative z-10 min-h-screen">
            {children}
          </main>

          <ChatInterfaceWrapper />

          <Footer />
        </ThemeProvider>


      </body>
    </html>
  );
}
