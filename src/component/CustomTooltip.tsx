import React, { useEffect, useRef, useState } from "react";

interface TooltipProps {
  children: React.ReactNode;
  tooltip: string;
  description: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  tooltip,
  description,
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      console.log(
        tooltipRef.current?.clientWidth,
        tooltipRef.current?.clientHeight
      );

      const tooltipSafeX = 350;
      const tooltipSafeY = 100;

      const offsetX = 10;
      const offsetY = 20;

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let x = e.clientX + offsetX;
      let y = e.clientY + offsetY;
      console.log(x + tooltipSafeX, windowWidth);
      if (x + tooltipSafeX > windowWidth) {
        x = windowWidth - tooltipSafeX - offsetX;
      }

      if (y + tooltipSafeY > windowHeight) {
        y = windowHeight - tooltipSafeY - offsetY;
      }

      setPosition({ x, y });
    };
    const handleMouseEnter = () => {
      setVisible(true);
    };
    const handMouseLeave = () => {
      setVisible(false);
    };
    const currentRef = tooltipRef.current;
    if (currentRef) {
      currentRef.addEventListener("mousemove", handleMouseMove);
      currentRef.addEventListener("mouseenter", handleMouseEnter);
      currentRef.addEventListener("mouseleave", handMouseLeave);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mousemove", handleMouseMove);
        currentRef.removeEventListener("mouseenter", handleMouseEnter);
        currentRef.removeEventListener("mouseleave", handMouseLeave);
      }
    };
  }, []);

  return (
    <div
      className="tooltips"
      ref={tooltipRef}
      style={{ position: "relative" }}
    >
      {children}
      {visible && (
        <span
          className="tooltipText"
          style={{
            top: position.y,
            left: position.x,
            // visibility: visible ? "visible" : "hidden",
          }}
        >
          {tooltip}
          <h5 className="tooltipDescription">{description}</h5>
        </span>
      )}
    </div>
  );
};
export default Tooltip;
