import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Knowledge } from "@/components/Knowledge";
import { Services } from "@/components/Services";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Knowledge />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
