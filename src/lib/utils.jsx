import clsx from "clsx"; // Import the clsx library for conditional class names
import { twMerge } from "tailwind-merge"; // Import the twMerge function from tailwind-merge to merge Tailwind CSS classes

// Define a function 'cn' that takes multiple inputs
export function cn(...inputs) {
  // Use clsx to conditionally join class names and then merge them using twMerge
  return twMerge(clsx(inputs));
}
