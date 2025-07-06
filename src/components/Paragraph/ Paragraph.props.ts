import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export interface IParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, PropsWithChildren {
  size?: "small" | "medium" | "large" 
}