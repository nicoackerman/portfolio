import React, { type ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    backgroundSize: "300% 100%",
    animation: `gradient ${animationSpeed}s linear infinite`,
  };

  return (
    <div
      className={`relative mx-auto flex max-w-fit cursor-pointer flex-row items-center justify-center overflow-hidden rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 ${className}`}
    >
      {/* Keyframes dentro del mismo archivo */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {showBorder && (
        <div className="absolute inset-0 z-0" style={gradientStyle}>
          <div
            className="absolute inset-0 z-[-1] rounded-[1.25rem] bg-black"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      )}

      <div
        className="relative inline-block text-transparent"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
        }}
      >
        {children}
      </div>
    </div>
  );
}
