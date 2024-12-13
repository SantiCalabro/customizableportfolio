import ExperienceIcon from "../assets/experience.svg"

export default function Experience() {
  return (
    <div id="experience" className="bg-primary-black flex flex-col w-full">
        <div className="flex items-center bg-white h-10 w-50 pl-10">
            <h3 className="flex roboto text-lg font-medium">
                <img src={ExperienceIcon} alt="My Professional Experience" className="mr-2 filter invert"/>
                My Professional Experience
            </h3>
        </div>
        <div className="flex py-20 flex-col">
            <div className="flex gap-20 justify-center">
                <div className="roboto font-medium text-2xl white -mt-1 ">2023-2024</div>
                <div className="flex flex-col w-1/2 border-l border-white pl-10 pb-8 gap-1 relative">
                <div className="bg-white w-5 h-5 rounded-full absolute -top-[1px] -left-[10px]"></div>
                    <h2 className="-mt-1 mandarine poppins text-2xl font-bold">Freelance Designer and Web Developer</h2>
                    <p className="white poppins text-sm font-regular">Buenos Aires, Argentina (February 2020 - June 2024)</p>
                    <h3 className="font-semibold poppins white mt-4">Full Stack Developer & Graphic Designer</h3>
                    <p className=" white poppins text-sm font-regular leading-relaxed ">As a freelance designer, I have worked on branding projects and designed a variety of printed materials, such as brochures, banners, and editorial layouts. I also create digital assets, including newsletters and social media flyers. My experience includes developing websites using CMS platforms like Wix and Shopify, as well as custom-coded sites with various technologies. Additionally, I handle basic video editing tasks.</p>
                </div>
            </div>
            <div className="flex gap-20 justify-center">
                <div className="roboto font-medium text-2xl white -mt-1 ">2023-2024</div>
                <div className="flex flex-col w-1/2 border-l border-white pl-10 pb-8 gap-1 relative">
                <div className="bg-white w-5 h-5 rounded-full absolute -top-[1px] -left-[10px]"></div>
                    <h2 className="-mt-1 mandarine poppins text-2xl font-bold">Hogarth Argentina</h2>
                    <p className="white poppins text-sm font-regular">Buenos Aires, Argentina (April 2023 - June 2024)</p>
                    <h3 className="font-semibold poppins white mt-4">Full Stack Developer</h3>
                    <p className=" white poppins text-sm font-regular leading-relaxed ">I worked on the migration of over 90 Coca-Cola Company websites globally, including collaboration in coordination tasks with Project Managers from different parts of the world.</p>
                </div>
            </div>
            <div className="flex gap-20 justify-center">
                <div className="roboto font-medium text-2xl white -mt-1 ">2023-2024</div>
                <div className="flex flex-col w-1/2 pl-10 pb-8 gap-1 relative">
                <div className="bg-white w-5 h-5 rounded-full absolute -top-[1px] -left-[10px]"></div>
                    <h2 className="-mt-1 mandarine poppins text-2xl font-bold">Accenture Argentina</h2>
                    <p className="white poppins text-sm font-regular">Mar del Plata, Argentina (June 2024 - September 2024)</p>
                    <h3 className="font-semibold poppins white mt-4">WordPress Developer</h3>
                    <p className=" white poppins text-sm font-regular leading-relaxed ">I worked on the migration of over 90 Coca-Cola Company websites globally, including collaboration in coordination tasks with Project Managers from different parts of the world.</p>
                </div>
            </div>
        </div>
    </div>

  )
}
