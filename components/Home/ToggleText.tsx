'use client'

import { ReactNode } from "react";
import AuroraGradient from "../common/AuroraGradient";

interface ToggleText {
    initialText: ReactNode;
    expandableText: ReactNode;
    onToggle?: () => void; 
    className?:string
    title?:string
    isExpanded?:boolean
    classNameText1?:string
    classNameText2?:string
 
}

export default function ToggleText({ initialText,expandableText,className,title,isExpanded = false,classNameText1,classNameText2,onToggle}: ToggleText) {

    return(
        <div className={className ? className:""} onClick={onToggle}>
            <AuroraGradient></AuroraGradient>
    
            
                <div className="flex flex-col overflow-hidden " >
                    {title && <h1 className="text-lg text-slate-50 font-semibold leading-8  truncate">{title}</h1>}
                    <p className={isExpanded ? classNameText2 ?? "text-base " : classNameText1 ?? "text-base"} >
                        {isExpanded ? expandableText : initialText}
                    </p>

            </div>
        </div>

        

    )
}