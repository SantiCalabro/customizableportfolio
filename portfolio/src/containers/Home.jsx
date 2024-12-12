import BackgroundImage from "../assets/background.webp";
import HeaderLogo from "../assets/header-logo.svg"
import Experience from '../components/Experience'
import CallToAction from "../components/CallToAction";
import Education from "../components/Education"
import Atom from "../assets/atom.svg"

export default function Home() {
  return (
    <div
    className="pl-80 pt-40 flex flex-col items-center bg-black bg-cover bg-no-repeat"style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <img src={HeaderLogo} className="w-6/12" alt="Santiago Calabró - Software Developer" />
        <CallToAction img={Atom} title="Explore My Strengths" body="I’ve identified my key strengths through the Gallup Clifton Strengths assessment. To find out more about how these strengths can benefit your project, click the button below to see my certificate" button="Check out my results" alt="Explore My Strengths" section="section"/>
        <Experience/>
        <CallToAction img={Atom} title="Let’s Create Something Great Together" body="I’m always excited to take on new challenges and collaborate on projects. If you think we could work well together, let’s discuss how I can help bring your vision to life." button="Get in touch" alt="Let’s Create Something Great Together" section="section" bg="bg-dark"/>
        <Education/>
    </div>
  );
}
