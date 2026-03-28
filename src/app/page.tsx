import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Music from "@/components/Music";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import SoundEffects from "@/components/SoundEffects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Music />
        <Events />
        <Gallery />
        <Booking />
      </main>
      <Footer />
      <SoundEffects />
    </>
  );
}
