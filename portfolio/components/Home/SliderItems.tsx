
import ToggleText from "./ToggleText";
import ProgressBar from "./ProgressBar";
import Image from "next/image";
import {
    react,
    tailwind,
    bc,
    btp,
    gk,
    github,
    mail,
    js,
    c,
    figma,
    cSharp,
    php,
    symfony,
    ts,
    bf,
    linkedin, apple
} from "@/public/assets/images";
export function SliderItems({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex" aria-hidden={ariaHidden}>
      <li className="flex items-center space-x-2">
        <Image src={react} alt="React" width={32} height={32} />
        <p>React</p>
      </li>
      <li className="flex items-center space-x-2">
        <Image src={tailwind} alt="Tailwind" width={32} height={32} />
        <p>Tailwind</p>
      </li>
      <li className="flex items-center space-x-2">
        <Image src={php} alt="PHP" width={32} height={32} />
        <p>PHP</p>
      </li>
      <li className="flex items-center space-x-2">
        <Image src={js} alt="JavaScript" width={32} height={32} />
        <p>JavaScript</p>
      </li>
      <li className="flex items-center space-x-2">
        <Image src={ts} alt="TypeScript" width={32} height={32} />
        <p>TypeScript</p>
      </li>
      <li className="flex items-center space-x-2">
        <Image src={figma} alt="Figma" width={32} height={32} />
        <p>Figma</p>
      </li>
    </div>

    );
}
