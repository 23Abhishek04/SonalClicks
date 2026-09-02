import Services from "../components/Services";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Feedback from "../components/Feedback";
import Testimonial from "../components/Testimonial";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
     <Services />
      <About />
      <Portfolio />
      <Feedback />
      <Testimonial />
    </main>
  );
}
