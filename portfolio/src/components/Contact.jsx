import { useState } from "react";
import contactIcon from "../assets/contact.svg";
export default function Contact() {
  const [input, setInput] = useState({
    fullName: "",
    companyName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [disabled, setDisabled] = useState(true);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;
    if (!input.fullName) newErrors.fullName = "Full Name is required.";
    if (!input.companyName) newErrors.companyName = "Company Name is required.";
    if (!input.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(input.email)) {
      newErrors.email = "Email must be valid.";
    } else if (!input.message) {
      newErrors.message = "Please write your message.";
    }
    if (
      !newErrors.fullName &&
      !newErrors.companyName &&
      !newErrors.email &&
      !newErrors.message &&
      input.message.length > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validate()[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate()[name] }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    setTouched({
      fullName: true,
      companyName: true,
      email: true,
      message: true,
    });
    setDisabled(true);
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted");
    }
  };
  return (
    <div id="contact" className="flex w-full px-14 justify-center items-center my-20 gap-20 pr-40">
      
      <div className="flex flex-col justify-center items-center w-1/2">
        <div className="flex items-center w-full">
          <img className="w-8" src={contactIcon} alt="Contact me" />
          <h3 className="font-bold mandarine  white text-4xl text-center ml-4 mt-[-5px]">
            Let's Connect!
          </h3>
        </div>
        <p className=" white mt-5 w-full">
          If you have any questions, a project in mind or a comment, <br className="mobile-hidden"/>you can
          write to me by completing the following form.
        </p>
        <div className="w-full mt-10">
  <form className="flex flex-col" onSubmit={handleSubmit}>
    <div className="flex space-x-4">
      {[
        {
          label: "Full Name*",
          name: "fullName",
          type: "text",
          placeholder: "Name",
        },
        {
          label: "Company Name*",
          name: "companyName",
          type: "text",
          placeholder: "Company Name",
        },
      ].map((field) => (
        <div key={field.name} className="flex flex-col w-1/2 my-2">
          <label className=" mb-1 text-sm white">{field.label}</label>
          <input
            onChange={handleChange}
            name={field.name}
            onBlur={handleBlur}
            type={field.type}
            placeholder={field.placeholder}
            className="bg-transparent border border-gray rounded-md white p-2 text-sm focus:outline-none"
          />
          {errors[field.name] && touched[field.name] && (
            <p className=" text-xs mt-1 text-red-500">
              {errors[field.name]}
            </p>
          )}
        </div>
      ))}
    </div>
    {[
      {
        label: "Email*",
        name: "email",
        type: "email",
        placeholder: "Email",
      },
      {
        label: "Message*",
        name: "message",
        type: "textarea",
        placeholder: "Your message",
      },
    ].map((field) => (
      <div key={field.name} className="flex flex-col w-full my-2">
        <label className=" mb-1 text-sm white">{field.label}</label>
        {field.name === "message" ? (
          <textarea
            placeholder={field.placeholder}
            className="bg-transparent border border-gray rounded-md white p-2 text-sm h-36 focus:outline-none"
            name={field.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ) : (
          <input
            onChange={handleChange}
            name={field.name}
            onBlur={handleBlur}
            type={field.type}
            placeholder={field.placeholder}
            className="bg-transparent border border-gray rounded-md white p-2 text-sm focus:outline-none"
          />
        )}
        {errors[field.name] && touched[field.name] && (
          <p className=" text-xs mt-1 text-red-500">
            {errors[field.name]}
          </p>
        )}
      </div>
    ))}


    <button
      type="submit"
      className={`w-fit self-end  font-bold font-sm ${
        disabled ? "disabled bg-secondary-gray" : "bg-mandarine"
      } px-20 py-1 rounded-full white mt-3`}
    >
      Submit
    </button>
  </form>
</div>
      </div>

      <div className="flex flex-col items-center w-1/2 relative aspect-video">
          <iframe  
          className="w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/xqpdhxrupRw" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
          </iframe>
      </div>
    </div>
  );
}
