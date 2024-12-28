import React, { useState } from "react";
import contactIcon from "../assets/ContactBlack.svg";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.companyName)
      newErrors.companyName = "Company Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validate()[name],
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validate()[name],
    }));
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
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      // Aquí iría la lógica para enviar el formulario, como una API call.
    }
  };

  return (
    <div id="contact" className="flex justify-center items-center my-20">
      <div className="rounded-xl bg-white w-4/5 flex flex-col justify-center items-center p-10 px-20">
        <img src={contactIcon} alt="Contact me" />
        <h3 className="font-bold poppins dark text-2xl text-center mt-2">
          Let's Connect!
        </h3>
        <p className="poppins text-sm dark text-center mt-2">
          If you have any questions, a project in mind or a comment, you can
          write to me by completing the following form.
        </p>
        <div className="w-full mt-10">
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
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
              {
                label: "Email*",
                name: "email",
                type: "email",
                placeholder: "Email",
              },
            ].map((field) => (
              <div key={field.name} className="flex flex-col w-full mb-4">
                <label className="poppins mb-1 text-sm">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`border rounded-md poppins p-2 text-sm focus:outline-none ${
                    errors[field.name] && touched[field.name]
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors[field.name] && touched[field.name] && (
                  <p className="poppins text-xs mt-1 text-red-500">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}
            <div className="flex flex-col w-full mb-4">
              <label className="poppins mb-1 text-sm">Message</label>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-gray-300 rounded-md poppins p-2 text-sm h-36 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="poppins font-bold font-sm bg-secondary-gray px-20 py-1 rounded-full white mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
