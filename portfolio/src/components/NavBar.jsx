import About from "../assets/about.svg"
import Contact from "../assets/contact.svg"
import Education from "../assets/education.svg"
import Experience from "../assets/experience.svg"
import Projects from "../assets/projects.svg"
import Stack from "../assets/stack.svg"
import Logo from "../assets/logo-expanded.svg"
import Arrow from "../assets/horizontal-arrow.svg"
export default function NavBar() {
  return (
    <div className=" z-50 shadow shadow-lg fixed flex flex-col w-80 bg-dark h-screen rounded-tr-2xl rounded-bt-2xl items-center pt-5">
      <div className="bg-mandarine w-5 h-5 absolute right-0 top-50 -mr-2 flex justify-center items-center rounded-full top-1/2 transform -translate-y-1/2"><img src={Arrow} alt="Expand/Shrink Navigation Bar" /></div>
      <div className='py-5 border-b border-white w-full flex justify-center'>
        <img src={Logo} alt="Santiago Calabró Dev" />
      </div>
      <div className='flex flex-col w-fit flex justify-center pt-10'>
        <a className='flex white my-4 text-sm poppins font-semibold section-active' href="/#about"><img className="mr-4" src={About} alt="About Me" /> About Me</a>
        <a className='flex white my-4 text-sm poppins font-semibold' href="/#experience"><img className="mr-4" src={Experience} alt="Professional Experience" />Professional Experience</a>
        <a className='flex white my-4 text-sm poppins font-semibold' href="/#education"> <img className="mr-4" src={Education} alt="Education" />Education</a>
        <a className='flex white my-4 text-sm poppins font-semibold' href="/#stack"> <img className="mr-4" src={Stack} alt="My Stack" />My Stack</a>
        <a className='flex white my-4 text-sm poppins font-semibold' href="/#projects"><img className="mr-4" src={Projects} alt="My Projects" />My Projects</a>
        <a className='flex white my-4 text-sm poppins font-semibold' href="/#contact"><img className="mr-4" src={Contact} alt="Contact Me" />Contact Me</a>
      </div>
    </div>
  )
}
