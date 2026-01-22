import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
export const metadata = {
  verification: {
    google: "cEK6xKIwigC4JJ00H_glOV0gFAZmaiy_NYT6xjseXAs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Navbar />
      <main className="glass-wrapper min-h-screen">
        {children}
      </main>
      <Footer />
    </body>
    </html>
  );
}
