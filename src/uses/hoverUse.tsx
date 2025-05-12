import { useHover } from "../hooks/useHover";

export function HoverCard() {
  const { ref, isHovered } = useHover<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{
        padding: "20px",
        backgroundColor: isHovered ? "#e0f7fa" : "#f5f5f5",
        transition: "0.3s ease",
      }}
    >
      {isHovered ? "👋 Hovering!" : "Hover over me"}
    </div>
  );
}