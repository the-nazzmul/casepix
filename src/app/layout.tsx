import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
import Providers from "@/components/Providers";
import { AuthProvider } from "./AuthProvider";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CasePix",
  description: "Customize phone cases with your own image",
  openGraph: {
    title: "CasePix - Custom Phone Cases",
    description: "Design your own phone case with your favorite images!",
    url: "https://casepix.vercel.app/",
    siteName: "CasePix",
    images: [
      {
        url: "https://casepix.vercel.app/thumbnail.png", // Use absolute URL
        width: 1200,
        height: 630,
        alt: "Custom phone case preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={recursive.className}>
          <Navbar />
          <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
            <div className="flex-1 flex flex-col h-full">
              <Providers>{children}</Providers>
            </div>
            <Footer />
          </main>

          <Toaster />
        </body>
      </html>
    </AuthProvider>
  );
}
