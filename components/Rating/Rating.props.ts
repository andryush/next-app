import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from "react";

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rating: number;
  isEditable?: boolean;
  setRating?: Dispatch<SetStateAction<number>>;
}
