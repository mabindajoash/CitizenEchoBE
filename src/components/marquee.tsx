import { cn } from "../lib/utils"; // Import utility function for conditional class names
import React from "react"; // Import React

// Define the interface for the component props
interface MarqueeProps {
  className?: string; // Optional class name for custom styling
  reverse?: boolean; // Optional flag to reverse the animation direction
  pauseOnHover?: boolean; // Optional flag to pause animation on hover
  children?: React.ReactNode; // Optional children elements to be displayed inside the marquee
  vertical?: boolean; // Optional flag to make the marquee vertical
  repeat?: number; // Optional number of times the children should be repeated
  [key: string]: any; // Allow any other additional props
}

// Define the Marquee component
export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props} // Spread any additional props onto the div
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]", // Base styles
        {
          "flex-row": !vertical, // Apply flex-row if not vertical
          "flex-col": vertical, // Apply flex-col if vertical
        },
        className, // Apply any custom class names
      )}
    >
      {Array(repeat) // Create an array with the length of repeat
        .fill(0) // Fill the array with zeros
        .map((_, i) => (
          <div
            key={i} // Use the index as the key
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical, // Apply horizontal marquee animation if not vertical
              "animate-marquee-vertical flex-col": vertical, // Apply vertical marquee animation if vertical
              "group-hover:[animation-play-state:paused]": pauseOnHover, // Pause animation on hover if pauseOnHover is true
              "[animation-direction:reverse]": reverse, // Reverse animation direction if reverse is true
            })}
          >
            {children} {/* Render the children elements */}
          </div>
        ))}
    </div>
  );
}
