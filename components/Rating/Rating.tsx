import { RatingProps } from "./Rating.props";
import React, { useEffect, useState, KeyboardEvent } from "react";
import styles from "./Rating.module.css";
import cn from "classnames";
import { StarIcon } from "../Icons/StarIcon";
export const Rating = ({
  rating,
  isEditable = false,
  setRating,
  ...props
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const constructRating = (currentRating: number): void => {
    const updatedRating = ratingArray.map((_, index) => {
      return (
        <span
          key={index}
          className={cn(styles.star, {
            [styles.star_filled]: index < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(index + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => handleClick(index + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(index + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArray(updatedRating);
  };

  const changeDisplay = (index: number): void => {
    if (!isEditable) {
      return;
    }
    constructRating(index);
  };

  const handleClick = (index: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(index);
  };

  const handleSpace = (index: number, e: KeyboardEvent<SVGElement>) => {
    if ((e.code === "Space" || e.code === "Enter") && setRating) {
      setRating(index);
    }
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <React.Fragment key={i}>{r}</React.Fragment>
      ))}
    </div>
  );
};
