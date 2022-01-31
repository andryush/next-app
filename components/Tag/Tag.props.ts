import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: "white" | "green" | "purple";
  children: ReactNode;
  url?: string;
}
