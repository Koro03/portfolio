import { StaticImageData } from "next/image"
import { ReactNode } from "react"
import { img } from "./project"

export type TimelineItemData = {
  title: string
  period: string
  image?: img
  summary: ReactNode        // vue card
  details?: ReactNode       // vue longue
}


export type TimelineProps = {
  items: TimelineItemData[];
};

