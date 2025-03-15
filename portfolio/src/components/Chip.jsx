export default function Chip({ tech, icon, alt }) {
  return (
    <div className="flex border-gray shadow-2xl w-fit px-5 py-3 rounded-lg items-center">
      <div className="flex pr-3 ">
        <img src={icon} alt={alt} className="w-7 h-auto max-w-none" />
      </div>
      <span className="font-semibold border-l-gray white pl-2">
        {tech}
      </span>
    </div>
  );
}
