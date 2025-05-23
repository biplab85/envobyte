import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./src/theme/style.scss"; // Correct path


import Header from "./component/header";
import Banner from "./component/banner";
import Service from "./component/service";
import MoreDetails from "./component/moreDetails";
import PreviousWork from "./component/PreviousWork";
import TeamMembers from "./component/TeamMembers";
import Faq from "./component/faq";
import ProudClients from "./component/ProudClients";
import ContactForm from "./component/ContactForm";
import Footer from "./component/footer";
import ProcessSteps from "./component/ProcessSteps";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Envobyte",
  description: "Envobyte by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Envobyte</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <section className="top-section">
          <Header />
          <Banner />
          <Service />
        </section>
        <MoreDetails />
        <PreviousWork />
        <ProcessSteps />
        <ProudClients />
        <TeamMembers />
        <Faq />
        <section className="contactContainer">
          <ContactForm />
          <Footer />
        </section>

        <div className="container m-auto">
          {children}
        </div>

      </body>
    </html>
  );
}
