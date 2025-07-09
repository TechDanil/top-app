import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export interface ITagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    PropsWithChildren {
  size?: "small" | "medium";
  color?: "ghost" | "red" | "grey" | "green" | "primary";
  href?: string;
  className?: string;
}
