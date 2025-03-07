import React from "react";

export default function Label({ label, value }) {
  return (
    <div class="bg-gray p-2 rounded-lg mx-3">
      <span class="mandarine font-bold">{label}:</span>
      <span class="font-light white ml-1">
        {label === "Age" ? value + " Years Old" : value}
      </span>
    </div>
  );
}
