
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
import { SliderItems } from "./SliderItems";

export default function InfiniteSlider({left}:{left:boolean}) {

    return (
        <div className="w-full inline-flex flex-nowrap py-2 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">

            <ul className={"flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none "+(left?"animate-infinite-scroll-left":"animate-infinite-scroll-right")}>
                <li className="flex items-center space-x-2">
                    <Image
                        src={react}
                        alt="React logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>React</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={tailwind}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>Tailwind</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={php}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>php</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={js}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>JavaScript</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={ts}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>TypeScript</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={c}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>C</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={cSharp}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>c#</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={symfony}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>symfony</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={figma}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>figma</p>
                </li>
            </ul>
            <ul className={"flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none "+(left?"animate-infinite-scroll-left":"animate-infinite-scroll-right")} aria-hidden="true">
                <li className="flex items-center space-x-2">
                    <Image
                        src={react}
                        alt="React logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>React</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={tailwind}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>Tailwind</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={php}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>php</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={js}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>JavaScript</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={ts}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>TypeScript</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={c}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>C</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={cSharp}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>c#</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={symfony}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>symfony</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={figma}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>figma</p>
                </li>
            </ul>
            <ul className={"flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none "+(left?"animate-infinite-scroll-left":"animate-infinite-scroll-right")} aria-hidden="true">
                <li className="flex items-center space-x-2">
                    <Image
                        src={react}
                        alt="React logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>React</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={tailwind}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>Tailwind</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={php}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>php</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={js}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>JavaScript</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={ts}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>TypeScript</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={c}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>C</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={cSharp}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>c#</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={symfony}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>symfony</p>
                </li>
                <li className="flex items-center space-x-2">
                    <Image
                        src={figma}
                        alt="Tailwind logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <p>figma</p>
                </li>
            </ul>
        </div>
    );
}
