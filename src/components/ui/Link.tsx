import type { ClassValue } from "clsx";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "~/lib/utils";

type LinkProps = ComponentProps<"a"> & {
  children: ReactNode;
  className?: ClassValue;
};

export default function Link({ className, children, ...props }: LinkProps) {
  return (
    <a className={cn("underline", className)} {...props}>
      {children}
    </a>
  );
}
