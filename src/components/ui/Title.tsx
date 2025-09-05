import type { ComponentProps, ReactNode } from "react";
import ScrollFloat from "./ScrollFloat";

type TitleProps = ComponentProps<typeof ScrollFloat> & {
  children: ReactNode;
  className?: string;
};

export default function Title({ className, children, ...props }: TitleProps) {
  return (
    <ScrollFloat
      animationDuration={1}
      ease="back.inOut(2)"
      scrollStart="center bottom+=50%"
      scrollEnd="bottom bottom-=40%"
      stagger={0.03}
      textClassName={className}
      {...props}
    >
      {children}
    </ScrollFloat>
  );
}
