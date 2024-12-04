import BackgroundImage from "../assets/background.webp";
import HeaderLogo from "../assets/header-logo.svg"
import Experience from '../components/Experience'

export default function Home() {
  return (
    <div
    className="pl-80 pt-40 flex flex-col items-center h-screen w-screen bg-black bg-cover bg-no-repeat"
    style={{ backgroundImage: `url(${BackgroundImage})` }}
  >
    <img src={HeaderLogo} className="w-6/12" alt="Santiago Calabró - Software Developer" />
    <Experience/>
  </div>


  );
}
