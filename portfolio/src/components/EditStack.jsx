import FormStack from "./FormStack"
export default function EditStack() {
  return (
    <div className="flex flex-col w-full gap-10 px-40 py-20">
      <FormStack label="For Development"/>
      <FormStack label="For Design"/>
      <div className="flex justify-center gap-10 mt-10">
        <button className="bg-mandarine px-10 py-1 font-bold rounded-full white">Save Changes</button>
      </div>
    </div>
  )
}
