"use client";

import { ReactNode, useState } from "react";
import ToggleText from "./ToggleText";

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

export default function ToggleWorkSection({ initialText,expandableText,className,title,isExpanded,classNameText1,classNameText2,onToggle}: ToggleText) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ToggleText
      className={className ? className:undefined}
      classNameText1={classNameText1 ? classNameText1:undefined}
      classNameText2={classNameText2 ? classNameText2:undefined}
      title={title ? title :undefined}
      initialText={initialText}        
      expandableText={expandableText}
      isExpanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    />
  );
}
