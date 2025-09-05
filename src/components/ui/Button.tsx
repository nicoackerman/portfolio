import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export default function Button({ ...props }: ButtonProps) {
  return (
    <button
      className="mt-4 rounded-lg border border-gray-600 bg-black/40 px-4 py-2 text-sm font-medium text-gray-300 backdrop-blur-sm transition hover:border-gray-400 hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]"
      {...props}
    ></button>
  );
}
