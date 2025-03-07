import BackgroundImage from "../assets/background.webp";
import HeaderLogo from "../assets/header-logo.svg";
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
      {/* <img
        src={HeaderLogo}
        className="w-6/12"
        alt="Santiago Calabró - Software Developer"
      />
      <CallToAction
        img={Atom}
        title="Explore My Strengths"
        body="I’ve identified my key strengths through the Gallup Clifton Strengths assessment. To find out more about how these strengths can benefit your project, click the button below to see my certificate"
        button="Check out my results"
        alt="Explore My Strengths"
        file="../../public/CliftonStrengths.pdf"
        download={true}
      /> */}
      <Hero />
      <Experience />
      <CallToAction
        img={Atom}
        title="Let’s Create Something Great Together"
        body="I’m always excited to take on new challenges and collaborate on projects. If you think we could work well together, let’s discuss how I can help bring your vision to life."
        button="Get in touch"
        alt="Let’s Create Something Great Together"
        file="contact"
        bg="bg-dark"
      />
      <Education />
      <Stack />
      <CallToAction
        img={Rocket}
        title="Continuously Growing"
        body="Technology is constantly evolving, and so am I. I’m passionate about expanding my knowledge and staying up-to-date with the latest tools and techniques to ensure I’m always delivering the best solutions."
        button="Get in touch"
        alt="Continuously Growing"
        file="contact"
      />
      <Projects />
      <Contact />
    </div>
  );
}
