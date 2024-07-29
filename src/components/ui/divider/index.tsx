import { ComponentProps } from "react";
import { cn } from "../../../lib/utils";

type DividerProps = ComponentProps<"div">;

export const Divider = ({ className, ...props }: DividerProps) => {
  return (
    <div
      className={cn("my-16 w-full border border-neutral-800", className)}
      {...props}
    />
  );
};
