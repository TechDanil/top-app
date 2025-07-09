import { ITagProps } from "@/components/Tag/Tag.props";
import cn from "classnames";
import styles from "./Tag.module.css";

export const Tag = (props: ITagProps) => {
  const {
    size = "medium",
    color = "ghost",
    className,
    children,
    href,
    ...rest
  } = props;

  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.ghost]: color === "ghost",
        [styles.grey]: color === "grey",
        [styles.primary]: color === "primary",
        [styles.red]: color === "red",
      })}
      {...rest}
    >
      {href ? <a href="">{children}</a> : <>{children}</>}
    </div>
  );
};

