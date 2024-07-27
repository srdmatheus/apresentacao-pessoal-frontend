import { ArrowUpRightIcon } from "lucide-react";
import { ComponentProps } from "react";

type LinkProps = ComponentProps<'a'> & {
  href: string;
}

export const Link = ({ children, href, ...props }: LinkProps) => {
  const isInternalLink = href.startsWith("/");
  return (
    <a
      href={href}
      target={isInternalLink ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="inline-flex items-baseline font-bold text-accent underline hover:opacity-90"
      {...props}
    >
      {children}
      {!isInternalLink && <ArrowUpRightIcon className="size-4" />}
    </a>
  );
};