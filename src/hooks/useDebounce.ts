import { useState, useEffect } from "react";

/**
 * useDebounce hook
 * Delays updating the returned value until the user stops changing it for a specified delay.
 * Useful for inputs like search bars to avoid firing API calls on every keystroke.
 */
export function useDebounce<T>(value: T, delay: number): T {
  // State to store debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timeout to update the debounced value after the delay
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    // Cleanup: clear the timeout if value changes before delay expires
    return () => clearTimeout(handler);
  }, [value, delay]); // Re-run effect whenever value or delay changes

  return debouncedValue;
}
