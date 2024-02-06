import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/custom_compoents/Navbar'
import { SheetComp } from '@/components/custom_compoents/SheetComp'
import Footer from "@/components/custom_compoents/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className='hidden sm:block'><Navbar /></div>
          <div className='sm:hidden flex  items-center justify-between p-2 bg-[#1E3C21]'> <h1 className='text-xl font-bold text-white text-center'>The Islamic Academy </h1> <h2><SheetComp /></h2>  </div>
          <div className="">{children}</div>
          <Footer/>
        </div>

      </body>
    </html>
  );
}
