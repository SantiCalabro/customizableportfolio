
export default function CallToAction({title, body, img, button, alt, file, bg, download}) {
  return (
    <div className={`${bg && bg} w-full py-24 flex flex-col justify-center items-center`}>
        {img && <img className="mb-6" src={img} alt={alt}/>}
        <h3 className="text-xl font-bold mandarine poppins">{title}</h3>
        <p className="mt-2 w-2/5 white font-sm text-center poppins leading-relaxed">{body}</p>
        <a 
          href={download ? file : `#${file}`} 
          download={download && "CliftonStrengths.pdf"} 
          className="mt-8 bg-mandarine px-10 py-2 rounded-full poppins font-bold"
        >
          {button}
        </a>
    </div>
  )
}

