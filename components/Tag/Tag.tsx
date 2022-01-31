import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({
  children,
  color = "white",
  url = "",
  ...props
}: TagProps) => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.white]: color === "white",
        [styles.green]: color === "green",
        [styles.purple]: color === "purple",
      })}
    >
      {url?.length ? <a href={url} className={styles.url}>{children}</a> : children}
    </div>
  );
};
