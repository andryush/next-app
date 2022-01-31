import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import Image from "next/image";
import arrowIcon from "../../public/icons/arrowIcon.svg";
import { ArrowIcon } from "../Icons/ArrowIcon";

export const Button = ({
  children,
  appearance,
  arrow = "none",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.arrow_right]: arrow === "right",
            [styles.arrow_down]: arrow === "down",
          })}
        >
          {/*<Image src={arrowIcon} alt="arrow" />*/}
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
