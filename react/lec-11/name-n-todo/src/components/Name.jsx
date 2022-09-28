import {useState} from "react";
export function Name() {
  const [name, setName] = useState("");
  return (
    <div>
      <div>{name.trim() ? `Hi ${name}!` : "Please enter your name"}</div>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}
