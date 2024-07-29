import { ArrowUpRightIcon } from "lucide-react";
import { ComponentProps } from "react";
import { cn } from "../../../lib/utils";

type LinkProps = ComponentProps<"a"> & {
  href: string;
};

export const Link = ({ children, href, className, ...props }: LinkProps) => {
  const isInternalLink = href.startsWith("/");
  return (
    <a
      href={href}
      target={isInternalLink ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-baseline font-bold text-accent underline hover:opacity-90",
        className
      )}
      {...props}
    >
      {children}
      {!isInternalLink && <ArrowUpRightIcon className="size-4" />}
    </a>
  );
};
