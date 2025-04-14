export default function SectionH2Title({
  text,
  accentText,
  as = "h2",
}: {
  as?: "h1" | "h2";
  text: string;
  accentText: string;
}) {
  return (
    <div className="relative z-10">
      {as === "h2" ? (
        <h2 className="text-h2">
          {text}{" "}
          <span className="relative whitespace-nowrap">
            {accentText}
            <span className="absolute left-0 right-0 translate-x-1 bottom-0 w-full h-[0.5em] bg-accent-purple-light -z-10" />
          </span>
        </h2>
      ) : (
        <h1 className="text-h2">
          {text}{" "}
          <span className="relative whitespace-nowrap">
            {accentText}
            <span className="absolute left-0 right-0 translate-x-1 bottom-0 w-full h-[0.5em] bg-accent-purple-light -z-10" />
          </span>
        </h1>
      )}
    </div>
  );
}
