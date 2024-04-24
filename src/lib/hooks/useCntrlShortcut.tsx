import { useEffect } from "react";

export default function useCntrlShortcut(
  targetKey: string,
  callback: () => void
) {
  const handleKeyDown = (event: KeyboardEvent) => {
    // event.preventDefault();
    if (event.key === targetKey && event.ctrlKey) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
