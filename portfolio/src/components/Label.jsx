export default function Label({ label, value }) {
  return (
    <div className="bg-primary-gray p-2 rounded-lg mx-3">
      <span className="mandarine font-bold">{label}:</span>
      <span className="font-light white ml-1">
        {label === "Age" ? value + " Years Old" : value}
      </span>
    </div>
  );
}
