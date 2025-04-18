import Hero from "../components/Hero";
import Experience from "../components/Experience";
import CallToAction from "../components/CallToAction";
import Education from "../components/Education";
import Atom from "../assets/atom.svg";
import Rocket from "../assets/rocket.svg";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Stack from "../components/Stack";
import { useSelector } from "react-redux";
export default function Home() {
  const nav = useSelector((state) => state.nav);
  return (
    <div
      className={`${
        nav ? "pl-64" : "pl-24"
      } pt-20 flex flex-col items-center bg-black bg-contain bg-repeat duration-500 ease-in-out`}>
     
      <Hero />
      <Experience />
      <CallToAction
        img={Atom}
        title="Let’s Create Something Great Together"
        body="I’m always excited to take on new challenges and collaborate on projects. If you think we could work well together, let’s discuss how I can help bring your vision to life."
        button="Get in touch"
        alt="Let’s Create Something Great Together"
        file="contact"
        
      />
      <Projects />
      <Stack />
      <CallToAction
        img={Rocket}
        title="Explore My Stregths"
        body={`I’ve identified my key strengths through the <strong class="font-black">Gallup Clifton Strengths</strong> assessment. To find out more about how these strengths can benefit your project, click the button below to see my certificate.`}
        button="Check out my results"
        alt="Explore My Stregths"
        file="download"
        download={true}
      />
      <Education />
      <Contact />
    </div>
  );
}
