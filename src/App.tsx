import "./styles/global.css";

import { TextInput } from "../src/components/Input";
import { Password } from "phosphor-react";

export default function App() {
  return (
    <>
      <h1 className="font-bold text-2xl text-cyan-900">Hello wolrd</h1>

      <TextInput.Root>
        <TextInput.Icon>
          <Password />
        </TextInput.Icon>
        <TextInput.Input placeholder="Enter your email" type="password" />
      </TextInput.Root>

      <button className="bg-cyan-500 font-medium px-4 py-2 rounded text-white hover:bg-violet-600 transition-colors duration-100 ">
        Enviar
      </button>
    </>
  );
}
