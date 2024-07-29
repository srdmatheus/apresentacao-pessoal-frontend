import { ComponentProps } from "react"
import { cn } from "../../../lib/utils"

type DividerProps = ComponentProps<'div'>

export const Divider = ({className, ...props}: DividerProps) => {
  return <div className={cn("w-full my-16 border border-neutral-800", className)} {...props} />
}