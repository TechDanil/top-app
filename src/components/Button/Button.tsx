import { IButtonProps } from "@/components/Button/Button.props";
import styles from "./Button.module.css";
import ArrowIcon from "./arrow.svg";
import cn from "classnames";

export const Button = ({
  appearance,
  arrow = "none",
  className,
  children,
  ...rest
}: IButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...rest}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
