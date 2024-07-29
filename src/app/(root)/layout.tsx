import Providers from "@/lib/provider";
import rootMetadata from "@/metadata/root";
import Footer from "@/shared/components/footer";
import Header from "@/shared/components/header";
import { font } from "@/app/(root)/font";

import "./../globals.css";

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          font.className +
          " w-full h-full bg-lighter dark:bg-darker min-h-screen flex flex-col justify-center items-center max-w-3xl m-auto px-4 xs:px-10"
        }
      >
        <Providers>
          <Header />
          <main className="h-full w-full justify-center items-center m-auto py-4 xs:py-10">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
