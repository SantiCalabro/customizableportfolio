import React from "react";
import Label from "./Label";

export default function Labels() {
  return (
    <div class="flex my-20">
      <Label label="Age" value="31" />
      <Label label="Based In" value="Australia" />
      <Label label="Languages" value="Spanish and English" />
    </div>
  );
}
