import { StaticImport } from "next/dist/shared/lib/get-img-props"

export type img ={
    src:string|StaticImport
    alt?:string
    width?:number
    height?:number
}

type techno = {
    image:img
    name:string
}

export type Project = {
  slug: string;
  title: string;
  summary: string;
  time: string;
  mainImage: img;
  verticalImage?:img
  technos: techno[];
  type?:string;
};

export type CardProjectInfo = Project & {
  rigth?: boolean;
  link?: string;
};

export type PresentationProject = Project & {
  description: string;
  features: string[];
  learnings: string[];
  challenges: string[];
};
