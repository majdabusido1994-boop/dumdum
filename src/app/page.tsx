import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Music from "@/components/Music";
import Events from "@/components/Events";
import VideoReels from "@/components/VideoReels";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import SoundEffects from "@/components/SoundEffects";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Music />
        <Events />
        <VideoReels />
        <Gallery />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <SoundEffects />
    </>
  );
}
