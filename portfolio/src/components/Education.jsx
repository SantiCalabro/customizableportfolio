import EducationIcon from "../assets/education-white.svg"
export default function Education() {
  return (
   <div id="education" className=" mandarine-gradient-reverse p-14 pb-0  bg-primary-black flex flex-col w-full">
           <div className="flex items-center">
               <h3 className="flex text-md pb-2 border-b-gray w-full font-bold white items-center">
                   <img src={EducationIcon} alt="Education" className=" w-6 mr-2 filter bg-mandarine p-[4px] rounded-md "/>
                  Education
               </h3>
           </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 pt-10 pb-20 gap-10">
            <div className="flex flex-col justify-between border-gray p-5 rounded-xl">
              <div>
                <h3 className="poppins text-xl mandarine font-bold">Full Stack Web Developer</h3>
                <p className="poppins text-sm white mt-1">Henry Bootcamp  (2022-2023)</p>
              </div>
              <button className="border-b border-mandarine rounded-full py-1 mandarine poppins font-semibold mt-6 w-fit px-6">Certification</button>
            </div>
            <div className="flex flex-col justify-between border-gray p-5 rounded-xl">
              <div>
              <h3 className="poppins text-xl mandarine font-bold">Visual Communication Design</h3>
              <p className="poppins text-sm white mt-1">La Plata National University (2022-2023)</p>
              </div>
              <button className="border-b border-mandarine rounded-full py-1 mandarine poppins font-semibold mt-6 w-fit px-6">Certification</button>
            </div>
            <div className="flex flex-col justify-between border-gray p-5 rounded-xl">
              <div>
              <h3 className="poppins text-xl mandarine font-bold">Basic Training in Visual Arts </h3>
              <p className="poppins text-sm white mt-1">Martín A. Malharro School of Visual Arts </p>
              </div>
              <button className="border-b border-mandarine rounded-full py-1 mandarine poppins font-semibold mt-6 w-fit px-6">Certification</button>
            </div>
            <div className="flex flex-col justify-between border-gray p-5 rounded-xl">
              <div>
              <h3 className="poppins text-xl mandarine font-bold">English C1 level - Advanced IELTS Exam </h3>
              <p className="poppins text-sm white mt-1">British Council </p>
              </div>
              <button className="border-b border-mandarine rounded-full py-1 mandarine poppins font-semibold mt-6 w-fit px-6">Certification</button>
            </div>
        </div>
       
    </div>
  )
}
