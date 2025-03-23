import ListItem from "./ListItem"
import FormSecondary from "./FormSecondary"
import UpdateForm from "./UpdateForm"
import { useState } from "react"
export default function EditExperience() {
  const [showUpdateForm, setShowUpdateForm] = useState(false)

  const handleUpdate = (state) => {
    setShowUpdateForm(state)
    console.log(showUpdateForm)
  }
  
  return (
    <div className="flex flex-col w-full gap-10 px-40 py-20">
      <div className="experience-items flex flex-col gap-4">
        <ListItem handleUpdate={handleUpdate} title="Hogarth Argentina" date="Buenos Aires, Argentina (April 2023 - June 2024)" role="Full Stack Developer" description='I worked on the migration of over 90 Coca-Cola Company websites globally, including collaboration in coordination tasks with Project Managers from different parts of the world.' />
        <ListItem handleUpdate={handleUpdate} title="Freelance Designer and Web Developer" date="(February 2020 - June 2024)" description='As a freelance designer, I have worked on branding projects and designed a variety of printed materials, such as brochures, banners, and editorial layouts. I also create digital assets, including newsletters and social media flyers. My experience includes developing websites using CMS platforms like Wix and Shopify, as well as custom-coded sites with various technologies. Additionally, I handle basic video editing tasks.' />
      </div>
      <div className="">
        <FormSecondary />
        {showUpdateForm && <UpdateForm handleUpdate={handleUpdate} />}
      </div>
    </div>
  )
}
