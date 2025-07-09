import { PropsWithChildren } from "react";

export interface IHtagProps extends PropsWithChildren {
  tag: "h1" | "h2" | "h3";
}
