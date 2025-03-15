import ExperienceIcon from "../assets/experience-white.svg"
import Almacruz from "../assets/Almacruz.webp"
export default function Experience() {
  return (
    <div id="experience" className=" mandarine-gradient rounded-t-[40px] p-14 pb-0  bg-primary-black flex flex-col w-full">
        <div className="flex items-center">
            <h3 className="flex text-md pb-2 border-b-gray w-full font-bold white items-center">
                <img src={ExperienceIcon} alt="My Professional Experience" className=" w-6 mr-2 filter bg-mandarine p-[4px] rounded-md "/>
               Professional Experience
            </h3>
        </div>
        <div className="flex items-center justify-center gap-40">
        <div className="flex w-1/2 pt-20 flex-col ">
            <div className="flex gap-20 ">
                <div className="flex flex-col border-l-gray pl-10 pb-8 gap-1 relative">
                    <div className="border-gray w-10 h-10 flex justify-center items-center rounded-full absolute -top-[10px] -left-[20px]">
                        <div className="bg-gray w-5 h-5 rounded-full "></div>
                    </div>
                    <h2 className="-mt-1 mandarine text-2xl font-bold">Freelance Designer and Web Developer</h2>
                    <p className="white text-sm font-regular">Buenos Aires, Argentina (February 2020 - June 2024)</p>
                    <h3 className="font-semibold white mt-4">Full Stack Developer & Graphic Designer</h3>
                    <p className=" white text-sm font-regular leading-relaxed ">As a freelance designer, I have worked on branding projects and designed a variety of printed materials, such as brochures, banners, and editorial layouts. I also create digital assets, including newsletters and social media flyers. My experience includes developing websites using CMS platforms like Wix and Shopify, as well as custom-coded sites with various technologies. Additionally, I handle basic video editing tasks.</p>
                </div>
            </div>
            <div className="flex gap-20 ">
                <div className="flex flex-col border-l-gray pl-10 pb-8 gap-1 relative">
                <div className="bg-gray w-5 h-5 rounded-full absolute -top-[1px] -left-[10px]"></div>
                    <h2 className="-mt-1 mandarine text-2xl font-bold">Hogarth Argentina</h2>
                    <p className="white text-sm font-regular">Buenos Aires, Argentina (April 2023 - June 2024)</p>
                    <h3 className="font-semibold white mt-4">Full Stack Developer</h3>
                    <p className=" white text-sm font-regular leading-relaxed ">I worked on the migration of over 90 Coca-Cola Company websites globally, including collaboration in coordination tasks with Project Managers from different parts of the world.</p>
                </div>
            </div>
            <div className="flex gap-20 ">
                <div className="flex flex-col pl-10 gap-1 relative">
                <div className="bg-gray w-5 h-5 rounded-full absolute -top-[1px] -left-[10px]"></div>
                    <h2 className="-mt-1 mandarine text-2xl font-bold">Accenture Argentina</h2>
                    <p className="white text-sm font-regular">Mar del Plata, Argentina (June 2024 - September 2024)</p>
                    <h3 className="font-semibold white mt-4">WordPress Developer</h3>
                    <p className=" white text-sm font-regular leading-relaxed ">I worked on the migration of over 90 Coca-Cola Company websites globally, including collaboration in coordination tasks with Project Managers from different parts of the world.</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col flex-col items-center ">
           <img src={Almacruz} alt="Almacruz" className="rounded-2xl"/>
           <a className="white border rounded-full w-fit px-10 py-1 mt-5" href="#">View Project</a>
        </div>
        </div>
    </div>

  )
}
