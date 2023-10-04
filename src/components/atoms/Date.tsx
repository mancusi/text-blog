import { formatDate } from "../../utils/formatDate";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const dateVariants = cva("font-sans", {
  variants: {
    color: {
      Black: "text-black",
      "Dark Gray": "text-gray-900",
      Gray: "text-gray-600",
      "Light Gray": "text-gray-400",
      White: "text-white",
      Blue: "text-blue-700",
      "Dark Blue": "text-blue-900",
    },
    weight: {
      Bold: "font-bold",
      "Semi Bold": "font-medium",
      Regular: "font-regular",
      Light: "font-light",
    },
    size: {
      L: "text-lg leading-[27px]",
      M: "text-base leading-normal",
      S: "text-sm leading-normal",
      XS: "text-xs leading-normal",
    },
  },
});

export interface DateProps {
  /**
   * @displayName Date
   **/
  date?: string;
  /**
   * @displayName Size
   **/
  size?: "XS" | "S" | "M" | "L";
  /**
   * @displayName Weight
   **/
  weight?: "Light" | "Regular" | "Semi Bold" | "Bold";
  /**
   * @displayName Color
   **/
  color?:
    | "White"
    | "Black"
    | "Dark Gray"
    | "Gray"
    | "Light Gray"
    | "Blue"
    | "Dark Blue";
}

export const initialProps: DateProps = {
  date: "2023-06-01",
  color: "Dark Gray",
  weight: "Regular",
  size: "M",
};

const Date = ({ date, color, weight, size }: DateProps) => {
  return (
    <p
      className={cn(
        dateVariants({
          size,
          weight,
          color,
        })
      )}
    >
      {formatDate(date)}
    </p>
  );
};

export default Date;
