'use client'

import { ReactNode } from "react";

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
            {/* aurora gradient layer */}
            <div className="absolute inset-0 opacity-60"
                style={{
                    background: `
                        radial-gradient(circle at 30% 140%, rgba(46,230,166,.35), transparent 40%),
                        radial-gradient(circle at 60% 300%, rgba(90,160,255,.25), transparent 70%),
                        radial-gradient(circle at 50% -40%, rgba(180,120,255,.25), transparent 60%),
                        linear-gradient(transparent, rgba(13,10,25,.6))

                    `
                }}
            />
    
            
                <div className="flex flex-col overflow-hidden " >
                    {title && <h1 className="text-lg text-slate-50 font-semibold leading-8  truncate">{title}</h1>}
                    <p className={isExpanded ? classNameText2 ?? "text-base " : classNameText1 ?? "text-base"} >
                        {isExpanded ? expandableText : initialText}
                    </p>

            </div>
        </div>

        

    )
}