import type { ClassValue } from "clsx";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "~/lib/utils";

type TextProps = ComponentProps<"p"> & {
  children: ReactNode;
  className?: ClassValue;
};

export default function Text({ className, children, ...props }: TextProps) {
  return (
    <p className={cn("text-gray-300", className)} {...props}>
      {children}
    </p>
  );
}
