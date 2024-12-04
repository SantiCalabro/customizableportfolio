import React from 'react'
import ExperienceIcon from "../assets/experience.svg"

export default function Experience() {
  return (
    <div className="bg-primary-black flex flex-col w-full">
    <div className="flex items-center bg-white h-10 w-50 pl-10">
        <h3 className="flex roboto text-lg font-medium">
            <img src={ExperienceIcon} alt="My Professional Experience" className="mr-2 filter invert"/>
            My Professional Experience
        </h3>
    </div>
    <div className="flex py-10 pl-10 flex-col justify-center">
        <div className="flex gap-20">
            <div className="roboto font-medium text-2xl white -mt-1 ">2023-2024</div>
            <div className="flex flex-col w-1/2 border-l border-white pl-10 pb-8 gap-1 relative">
            <div className="bg-white w-5 h-5 rounded-full absolute -top-[1px] -left-[10px]"></div>
                <h2 className="-mt-1 mandarine poppins text-2xl font-bold">Freelance Designer and Web Developer</h2>
                <p className="white poppins text-md font-regular">(February 2020 - June 2024)</p>
                <p className="mt-4 white poppins text-sm font-regular leading-relaxed ">As a freelance designer, I have worked on branding projects and designed a variety of printed materials, such as brochures, banners, and editorial layouts. I also create digital assets, including newsletters and social media flyers. My experience includes developing websites using CMS platforms like Wix and Shopify, as well as custom-coded sites with various technologies. Additionally, I handle basic video editing tasks.</p>
            </div>
        </div>
        <div className="flex gap-20">
            <div className="roboto font-medium text-2xl white -mt-1 ">2023-2024</div>
            <div className="flex flex-col w-1/2 border-l border-white pl-10 pb-8 gap-1 relative">
            <div className="bg-white w-5 h-5 rounded-full absolute -top-[1px] -left-[10px]"></div>
                <h2 className="-mt-1 mandarine poppins text-2xl font-bold">Freelance Designer and Web Developer</h2>
                <p className="white poppins text-md font-regular">(February 2020 - June 2024)</p>
                <p className="mt-4 white poppins text-sm font-regular leading-relaxed">As a freelance designer, I have worked on branding projects and designed a variety of printed materials, such as brochures, banners, and editorial layouts. I also create digital assets, including newsletters and social media flyers. My experience includes developing websites using CMS platforms like Wix and Shopify, as well as custom-coded sites with various technologies. Additionally, I handle basic video editing tasks.</p>
            </div>
        </div>
        <div className="flex gap-20">
            <div className="roboto font-medium text-2xl white -mt-1 ">2023-2024</div>
            <div className="flex flex-col w-1/2 border-l border-white pl-10 pb-8 gap-1 relative">
            <div className="bg-white w-5 h-5 rounded-full absolute -top-[1px] -left-[10px]"></div>
                <h2 className="-mt-1 mandarine poppins text-2xl font-bold">Freelance Designer and Web Developer</h2>
                <p className="white poppins text-md font-regular">(February 2020 - June 2024)</p>
                <p className="mt-4 white poppins text-sm font-regular leading-relaxed">As a freelance designer, I have worked on branding projects and designed a variety of printed materials, such as brochures, banners, and editorial layouts. I also create digital assets, including newsletters and social media flyers. My experience includes developing websites using CMS platforms like Wix and Shopify, as well as custom-coded sites with various technologies. Additionally, I handle basic video editing tasks.</p>
            </div>
        </div>
    </div>
</div>

  )
}
