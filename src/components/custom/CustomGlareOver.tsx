import GlareHover from "../ui/GlareHover";
import type { ReactNode } from "react";

type CustomGlareOverProps = {
  children: ReactNode;
  className: string;
};

export default function CustomGlareOver({
  children,
  className,
}: CustomGlareOverProps) {
  return (
    <GlareHover
      width="350px"
      height="500px"
      glareColor="#ffffff"
      className={className}
      glareOpacity={0.3}
      glareAngle={-30}
      glareSize={300}
      transitionDuration={800}
      playOnce={false}
    >
      {children}
    </GlareHover>
  );
}
