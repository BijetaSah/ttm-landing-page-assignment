import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import DemoModal from "./components/DemoModal";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Benefits />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}

export default Page;
