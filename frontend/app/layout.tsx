import Header from "@/components/header";
import Footer from "@/components/footer";
import AuthContext, { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  var authenticated = true;
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header authenticated={authenticated} />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
