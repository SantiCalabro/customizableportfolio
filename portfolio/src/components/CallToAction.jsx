
export default function CallToAction({title, body, img, button, alt, section, bg}) {
  return (
    <div className={`${bg && bg} w-full py-40 flex flex-col justify-center items-center`}>
        {img && <img className="mb-2" src={img} alt={alt}/>}
        <h3 className="text-xl font-bold mandarine poppins">{title}</h3>
        <p className="mt-2 w-2/5 white font-sm text-center poppins leading-relaxed">{body}</p>
        <a href={`#${section}`} className="mt-4 bg-mandarine px-5 py-2 rounded-full poppins font-bold">{button}</a>
    </div>
  )
}
