import { cn } from "~/lib/utils";
import { type ClassValue } from "clsx";
import SplashCursor from "../ui/SplashCursor";
import { useState } from "react";
import Button from "../ui/Button";

export default function CustomSplashCursor({
  className,
}: {
  className?: ClassValue;
}) {
  const [isHidden, setHidden] = useState(false);
  return (
    <>
      <div className={cn("", className)}>
        <Button
          onClick={() => setHidden((prev) => !prev)}
          className="mt-4 rounded-lg border border-gray-600 bg-black/40 px-4 py-2 text-sm font-medium text-gray-300 backdrop-blur-sm transition hover:border-gray-400 hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        >
          {isHidden ? "Turn on splash" : "Turn off splash"}
        </Button>
      </div>
      {!isHidden && <SplashCursor />}
    </>
  );
}
