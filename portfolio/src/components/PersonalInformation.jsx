import userIcon from "../assets/user-icon.png";
import editPen from "../assets/edit-pen.svg";
import { useState, useRef } from "react";

export default function PersonalInformation() {
  const [profile, setProfile] = useState({
    picture: "",
    name:"",
    about: "",
    age: "",
    country: "",
    languages: [], 
  });

  const [inputValue, setInputValue] = useState("");
  const fileInputRef = useRef(null);
  const [clickedName, setClickedName] = useState(false)

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleClickName = ()=>{
    setClickedName(!clickedName)
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          picture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleLanguageInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleLanguageInputKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newLanguage = inputValue.trim();
      if (newLanguage && !profile.languages.includes(newLanguage)) {
        setProfile((prev) => ({
          ...prev,
          languages: [...prev.languages, newLanguage],
        }));
        setInputValue("");
      }
    }
  };

  const removeLanguage = (languageToRemove) => {
    setProfile((prev) => ({
      ...prev,
      languages: prev.languages.filter((lang) => lang !== languageToRemove),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
    alert("Form submitted successfully!");

  };

  return (
    <>
      <div className="w-full px-10 pb-5 border-b-mandarine text-xl">
        <h3 className="white font-light">
          <strong className="font-bold">Add or Update</strong> information about you
        </h3>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
      <div className="border-mandarine border-2 w-64 h-64 overflow-hidden mt-10 rounded-full p-3 flex items-center justify-center flex-col">
        <div className="w-full h-full rounded-full overflow-hidden">
            <img
            src={profile.picture || userIcon}
            alt="My Profile"
            className="cursor-pointer w-full h-full object-cover"
            onClick={handleImageClick}
            />
        </div>
        <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
            accept="image/*"
        />
        </div>
        <span className="white mt-3 font-light">Upload your profile picture</span>
        <div className="flex mt-3">
          <h1 className={`${clickedName ? "hidden" :''} white text-4xl font-black mr-3`}>{profile.name || "Your Name Here"}</h1>
          <input
            type="text"
            name="name"
            className={`${clickedName ? "" :'hidden'}  px-3 py-1 focus:outline-none white border-b-primary-gray text-center mr-2 bg-black white text-4xl font-black`}
            value={profile.name || ""} 
            onChange={handleChange}
            placeholder="Write your name here"
            onBlur={handleClickName}
          />
          <img src={editPen} alt="Edit" className={`cursor-pointer`} onClick={handleClickName} />
        </div>
      </div>
      <div className="about mt-10 flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <label htmlFor="about" className="white mb-2">
              About You
            </label>
            <textarea
              name="about"
              id="about"
              value={profile.about}
              onChange={handleChange}
              className="focus:outline-none white p-3 text-sm border-primary-gray w-[700px] h-40 rounded-xl bg-gray-opacity"
            ></textarea>

            <div className="mt-5 flex items-center justify-center gap-5">
              <div className="flex flex-col">
                <label htmlFor="age" className="white mb-2">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  value={profile.age}
                  onChange={handleChange}
                  className="appearance-none [-moz-appearance:_textfield] text-sm px-3 focus:outline-none white border-primary-gray w-[100px] h-10 rounded-md bg-gray-opacity"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="country" className="white mb-2">
                  Country of Residence
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  value={profile.country}
                  onChange={handleChange}
                  className="text-sm px-3 focus:outline-none white border-primary-gray w-[230px] h-10 rounded-md bg-gray-opacity"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="languages" className="white mb-2">
                  Languages
                </label>
                <div className=" flex flex-wrap gap-2 p-2 border-primary-gray rounded-md bg-gray-opacity  ">
                  {profile.languages.map((lang) => (
                    <div
                      key={lang}
                      className="flex items-center bg-mandarine text-white rounded-full px-3 py-1 text-sm"
                    >
                      {lang}
                      <button
                        type="button"
                        onClick={() => removeLanguage(lang)}
                        className="ml-2 focus:outline-none"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleLanguageInputChange}
                    onKeyDown={handleLanguageInputKeyDown}
                    placeholder="Type and press Enter"
                    className="flex-1 bg-transparent text-white focus:outline-none placeholder-gray-400 "
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10 gap-5">
              <button type="submit" className="bg-mandarine border-mandarine white font-bold border rounded-full px-5 py-2 w-56">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}