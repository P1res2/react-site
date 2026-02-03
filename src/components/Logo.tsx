type LogoProps = {
  text: string;
  color?: "light" | "dark";
};

export function Logo({ text, color = "light" }: LogoProps) {
  if (color === "light") {
    return (
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
          <span className="text-lg font-bold text-zinc-950">
            {text.charAt(0).toUpperCase()}
          </span>
        </div>
        <span className="text-lg font-semibold text-white">{text}</span>
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-950">
          <span className="text-lg font-bold text-white">
            {text.charAt(0).toUpperCase()}
          </span>
        </div>
        <span className="text-lg font-semibold text-foreground">{text}</span>
      </div>
    );
  }
}
