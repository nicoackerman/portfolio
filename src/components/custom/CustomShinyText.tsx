import { cn } from "~/lib/utils";
import ShinyText from "../ui/ShinyText";
import { type ClassValue } from "clsx";

export default function CustomShinyText({
  text,
  className,
}: {
  text: string;
  className?: ClassValue;
}) {
  return (
    <ShinyText
      text={text}
      speed={2}
      className={cn("custom-class", className)}
    />
  );
}
