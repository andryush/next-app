import { PtagProps } from "./Ptag.props";
import styles from "./Ptag.module.css";
import cn from "classnames";

export const Ptag = ({ children, size = "m", ...props }: PtagProps) => {
  return (
    <p
      className={cn(styles.p, {
        [styles.p_small]: size === "s",
        [styles.p_medium]: size === "m",
        [styles.p_large]: size === "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
