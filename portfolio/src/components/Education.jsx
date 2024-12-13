import EducationIcon from "../assets/education.svg"
export default function Education() {
  return (
    <div id="education" className="bg-primary-black flex flex-col w-full">
        <div className="flex items-center bg-white h-10 w-50 pl-10">
            <h3 className="flex roboto text-lg font-medium">
                <img src={EducationIcon} alt="My Professional Experience" className="mr-2 filter invert"/>
                My Education
            </h3>
        </div>
        <div className="grid bg-primary-black border-b-mandarine sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 p-10 pt-20 gap-20">
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="poppins text-xl mandarine font-bold">Full Stack Web Developer</h3>
                <p className="poppins text-sm white mt-1">Henry Bootcamp  (2022-2023)</p>
              </div>
              <button className="border-b border-mandarine rounded-full py-1 mandarine poppins font-semibold mt-6 w-fit px-6">Certification</button>
            </div>
            <div className="flex flex-col justify-between">
              <div>
              <h3 className="poppins text-xl mandarine font-bold">Visual Communication Design</h3>
              <p className="poppins text-sm white mt-1">La Plata National University (2022-2023)</p>
              </div>
              <button className="border-b border-mandarine rounded-full py-1 mandarine poppins font-semibold mt-6 w-fit px-6">Certification</button>
            </div>
            <div className="flex flex-col justify-between">
              <div>
              <h3 className="poppins text-xl mandarine font-bold">Basic Training in Visual Arts </h3>
              <p className="poppins text-sm white mt-1">Martín A. Malharro School of Visual Arts </p>
              </div>
              <button className="border-b border-mandarine rounded-full py-1 mandarine poppins font-semibold mt-6 w-fit px-6">Certification</button>
            </div>
  
        </div>
        <div className="flex w-full justify-center items-center p-10 pb-20">
          <div className="flex w-full p-10 px-16 justify-between items-end bg-dark rounded-xl">
            <div>
              <h3 className="poppins text-xl mandarine font-bold mb-2">English C1 level - Advanced</h3>
              <p className="poppins text-sm white">IELTS Exam - British Council</p>
            </div>
            <button className="poppins rounded-full border-none bg-mandarine font-bold px-5 py-1 h-fit">Certification</button>
          </div>
        </div>
    </div>
  )
}
