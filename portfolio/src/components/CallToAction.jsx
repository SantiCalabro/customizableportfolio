
export default function CallToAction({title, body, img, button, alt, file, bg, download, titleStyle}) {
  return (
    <div className={`${bg ? bg : 'bg-black'} w-full py-24 flex flex-col justify-center items-center`}>
        {img && <img className="mb-4 w-20" src={img} alt={alt}/>}
        <h3 className={`text-2xl font-bold ${titleStyle ? titleStyle : "mandarine "}`}>{title && title}</h3>
        <p className="mt-2 w-2/5 white font-sm text-center leading-relaxed" dangerouslySetInnerHTML={{ __html: body && body }} />
        {button && <a 
          href={download ? file : `#${file}`} 
          download={download && "CliftonStrengths.pdf"} 
          className="mt-8 bg-mandarine px-10 py-2 rounded-full font-black text-sm uppercase tracking-wide"
        >
          {button && button}
        </a>}
    </div>
  )
}