import React, { useRef, useState } from "react";
import { useEffect } from "react";

// Custom hook to handle clicks outside a referenced element
const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

const OutsideClickComponent = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Handle click outside the component
  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  return (
    <div className="relative">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Toggle Menu
      </button>

      {isOpen && (
        <div
          ref={ref}
          className="absolute top-12 left-0 w-48 p-4 bg-white shadow-lg border rounded"
        >
          <p>Click outside me to close!</p>
        </div>
      )}
    </div>
  );
};

export default OutsideClickComponent;
