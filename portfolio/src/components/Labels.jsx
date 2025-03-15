import Label from "./Label";

export default function Labels() {
  return (
  <div className="flex flex-col items-center justify-center">
    <div className="flex mt-10">
      <Label label="Age" value="31" />
      <Label label="Based In" value="Australia" />
      <Label label="Languages" value="Spanish and English" />
    </div>
    <p className="w-1/2 tracking-wide white my-10 text-center font-light text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error tempore eveniet inventore, earum ullam amet reprehenderit hic. Vitae fugiat assumenda sint, ipsa perferendis id, quasi, accusamus a tempore laudantium amet!</p>
    </div>
  );
}
