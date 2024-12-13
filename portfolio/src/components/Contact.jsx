import contactIcon from "../assets/ContactBlack.svg";
export default function Contact() {
  return (
    <div id="contact" className="flex justify-center items-center my-20">
        <div className="rounded-xl bg-white w-4/5 flex flex-col justify-center items-center p-10 px-20">
            <img src={contactIcon} alt="Contact me" />
            <h3 className="font-bold poppins dark text-2xl text-center mt-2">Let's Connect!</h3>
            <p className="poppins text-sm dark text-center mt-2 ">If you have any questions, a project in mind or a comment, you can write to me by completing the following form.</p>
            <div className="flex flex-col justify-center w-full mt-10">
                <div className="flex flex-col">
                    <label className="poppins mb-1 text-sm">Full Name*</label>
                    <input type="text" placeholder="Name" className="border border-gray rounded-md poppins p-2 text-sm focus:outline-none"/>
                    <p className="poppins text-xs mt-1 text-right">Please write your name</p>
                </div>
                <div className="flex flex-col">
                    <label className="poppins mb-1 text-sm">Email*</label>
                    <input type="text" placeholder="Email" className="border border-gray rounded-md poppins p-2 text-sm focus:outline-none"/>
                    <p className="poppins text-xs mt-1 text-right">Please write your email</p>
                </div>
                <div className="flex flex-col">
                    <label className="poppins mb-1 text-sm">Message</label>
                    <textarea placeholder="Message" className="border border-gray rounded-md poppins p-2 text-sm h-36 focus:outline-none"/>
                    <p className="poppins text-xs mt-1 text-right">Please write your message</p>
                </div>
            </div>
        </div>
    </div>
  )
}
